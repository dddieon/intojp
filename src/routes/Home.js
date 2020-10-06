import React from "react"
import { Link } from "react-router-dom"
import "../routes/Home.css"
export default function Home() {
    const homeDiv = {
        backgroundColor: "#222",
        height: "100%",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    }
    const h2 = {
        marginBottom: "20px",
    }
    return (
        <div style={homeDiv}>
            <h1>인투제이피</h1>
            <h2 style={h2}>
                인투제이피는 일본 유학과 일본 취업을 위해 만들어진 유학원과 취업센터를 결합한, 일본
                유학 취업 컨설팅 전문 1인 운영 상담소 입니다.
            </h2>
            <Link className="button" to="/schedule">
                입장하기
            </Link>
        </div>
    )
}
