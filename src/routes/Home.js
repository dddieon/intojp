import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import Aos from "aos"
import "aos/dist/aos.css"

export default function Home() {
    useEffect(() => {
        Aos.init({ duration: 1000 })
    })
    const homeDiv = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    }
    const h2 = {
        marginBottom: "20px",
    }
    const image = {
        display: "block",
        maxWidth: "80%",
        marginBottom: 30,
    }
    const button = {
        display: "block",
        padding: "10px",
        marginBottom: 30,
        color: "#222 !important",
        background: " rgb(255, 187, 0)",
        borderRadius: "10px",
        fontWeight: 7,
    }
    return (
        <div style={homeDiv}>
            <img
                src={require("../assets/image/landscape.jpg")}
                alt={"landscape"}
                style={image}
            ></img>
            <img
                src={require("../assets/image/landscape.jpg")}
                alt={"landscape"}
                style={image}
                data-aos="fade-up"
            ></img>
            <img
                src={require("../assets/image/landscape.jpg")}
                alt={"landscape"}
                style={image}
                data-aos="fade-right"
            ></img>
            <h2 style={h2}>
                인투제이피는 일본 유학과 일본 취업을 위해 만들어진 유학원과 취업센터를 결합한, 일본
                유학 취업 컨설팅 전문 1인 운영 상담소 입니다.
            </h2>
            <Link className="button" to="/schedule" style={button}>
                상담 예약하기
            </Link>
        </div>
    )
}
