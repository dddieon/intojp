import React, { useState } from "react"
import Calendar from "react-calendar"
import "react-calendar/dist/Calendar.css"
import "./Schedule.css"
export default function Schedule() {
    const [date, setDate] = useState(new Date())
    const [plan, setPlan] = useState("")
    const onChange = (value) => {
        setDate(value)
    }
    const onClickday = (value, event) => {
        const prompted = prompt("일정을 입력하세요", "")
        setPlan(prompted)
        console.log(event.target)
        const p = document.createElement("p")
        p.innerText = prompted
        event.target.appendChild(p)
    }
    return <Calendar value={date} onChange={onChange} onClickDay={onClickday}></Calendar>
}
