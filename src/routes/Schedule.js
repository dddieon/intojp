import React, { useState, useEffect, useRef } from "react"
import { dbService, storageService } from "fbase"
import Calendar from "react-calendar"
import "react-calendar/dist/Calendar.css"
import "./Schedule.css"
export default function Schedule() {
    const [date, setDate] = useState(new Date())
    const [plan, setPlan] = useState(null)
    const [label, setLabel] = useState(null)
    const [loading, setLoading] = useState(true)
    const refId = useRef(1)
    const onChange = (value) => {
        setDate(value)
    }
    const onClickday = async (value, event) => {
        const prompted = prompt("일정을 입력하세요", "")
        if (prompted) {
            const p = document.createElement("p")
            p.setAttribute("class", "plan")
            p.innerText = prompted
            event.target.appendChild(p)
            //클릭한 이후로 데이터를 넣자
            const planObj = {
                id: refId.current,
                plan: prompted,
                when: event.target.children[0].getAttribute("aria-label"),
                createdAt: Date.now(),
            }
            await dbService.collection("calander").add(planObj)
        } else {
            return
        }
        refId.current += 1
    }
    const Mount = () => {
        // plan이라는 클라우드데이터배열을 반복문 돌려서, ariaLabel과 plan[순서].when이 일치하는 것만 빼오기
        if (plan && label) {
            label.forEach((L, index) => {
                const haveToLabel = L.children[0].getAttribute("aria-label")
                plan.forEach((element) => {
                    if (element.when === haveToLabel) {
                        console.log(L)
                        console.log("상단의 엘리먼트에 appendChild하자")
                        const p = document.createElement("p")
                        p.setAttribute("class", "plan")
                        p.innerText = element.plan
                        L.appendChild(p)
                    }
                })
            })
        }
    }
    Mount()
    useEffect(() => {
        // 스케쥴정보 get하기
        dbService.collection("calander").onSnapshot((snapshot) => {
            const 가공 = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
            setPlan(가공)
        })
        // react-calendar__tile 안을 탐색해서 가공의 when과 일치하는 abbr태그를 찾기
        const title = document.getElementsByClassName("react-calendar__tile")
        const arr = Array.from(title)
        arr.forEach((element, index) => console.log(element + "는" + index + "번째"))
        setLabel(arr)
        // 로딩 끝
        setLoading(false)
    }, [])
    return <Calendar value={date} onChange={onChange} onClickDay={onClickday}></Calendar>
}
