import React, { useState, useEffect, useCallback } from "react"
import { dbService } from "fbase"
import Calendar from "react-calendar"
import Tile from "react-calendar"
import "react-calendar/dist/Calendar.css"
import "./Schedule.css"
export default function Schedule() {
    const [date, setDate] = useState(new Date())
    const [plan, setPlan] = useState(null)
    const [label, setLabel] = useState(null)
    const [loading, setLoading] = useState(true)
    // 현재 페이지 변환함을 감지
    if (document.getElementsByTagName("react-calendar__navigation__label")) {
        const page = document.getElementsByTagName("react-calendar__navigation__label")
        for (var i = 0; i < page.length; i++) {
            page[i].addEventListener("click", console.log("야"))
        }
    }

    // 콜백으로 get하기
    const onView = useCallback(() => {
        // 스케쥴정보 get하기
        try {
            dbService.collection("calander").onSnapshot((snapshot) => {
                const 가공 = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
                setPlan(가공)
            })
            // react-calendar__tile 안을 탐색해서 가공의 when과 일치하는 abbr태그를 찾기
            const title = document.getElementsByClassName("react-calendar__tile")
            const arr = Array.from(title)
            setLabel(arr)
            setLoading(false)
        } catch (e) {
            console.log(e)
        }
    }, [])

    const onClickday = async (value, event) => {
        const prompted = prompt("일정을 입력하세요", "")
        if (prompted) {
            //입력받은 데이터를 넣자
            const planObj = {
                plan: prompted,
                when: event.target.children[0].getAttribute("aria-label"),
                createdAt: Date.now(),
            }
            await dbService.collection("calander").add(planObj)
        } else {
            return false
        }
    }
    useEffect(() => {
        const Mount = () => {
            // plan이라는 클라우드데이터배열을 반복문 돌려서, ariaLabel과 plan[순서].when이 일치하는 것만 빼오기
            if (plan && label) {
                label.forEach((L, index) => {
                    // L은 appendChild하고 싶은 부모 엘리먼트이다
                    const haveToLabel = L.children[0].getAttribute("aria-label")
                    plan.forEach((element) => {
                        if (element.when === haveToLabel) {
                            const p = document.createElement("p")
                            p.setAttribute("class", "plan")
                            p.innerText = element.plan
                            // p태그 초기화
                            if (L.childNodes[1]) {
                                L.removeChild(L.childNodes[1])
                            }
                            L.appendChild(p)
                        }
                    })
                })
            }
        }
        Mount()
    }, [label, plan])

    useEffect(() => {
        const getSchedule = async () => {
            // 스케쥴정보 get하기
            try {
                await dbService.collection("calander").onSnapshot((snapshot) => {
                    const 가공 = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
                    setPlan(가공)
                })
                // react-calendar__tile 안을 탐색해서 가공의 when과 일치하는 abbr태그를 찾기
                const title = document.getElementsByClassName("react-calendar__tile")
                const arr = Array.from(title)
                setLabel(arr)
                setLoading(false)
            } catch (e) {
                console.log(e)
            }
        }
        getSchedule()
    }, [])
    return (
        <>
            <Calendar
                value={date}
                onClickDay={onClickday}
                onViewChange={({ activeStartDate, view }) => {
                    onView()
                }}
                onActiveStartDateChange={({ activeStartDate, view }) => {
                    onView()
                }}
            ></Calendar>
            <div className="test">
                <h2 className="test--title">Test Page</h2>
                <p>현재는 Login을 통한 인증을 거치지 않아도, 누구나 데이터 수정이 가능합니다</p>
            </div>
        </>
    )
}
