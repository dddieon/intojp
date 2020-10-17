import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import Aos from "aos"
import "aos/dist/aos.css"
import styled, { css } from "styled-components"

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
    const h3 = {
        marginBottom: "20px",
    }
    const div = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minWidth: "100%",
        marginTop: 30,
        marginBottom: 30,
        height: "80vh",
        overflow: "hidden",
    }
    const innerImage = {
        width: "40%",
    }
    const image = {
        display: "block",
        width: "100%",
    }
    const button = {
        display: "block",
        padding: "1.2em",
        marginBottom: 30,
        color: "#222 !important",
        border: "1px solid #222",
        fontWeight: 7,
    }
    return (
        <div style={homeDiv}>
            <div style={div}>
                <h2>
                    최고의 맞춤상담, <p>인투제이피</p>
                </h2>
                <img
                    src={require("../assets/image/interview.jpg")}
                    alt={"landscape"}
                    style={innerImage}
                    data-aos="fade-left"
                ></img>
            </div>
            <img
                src={require("../assets/image/cycle.jpg")}
                alt={"landscape"}
                style={image}
                data-aos="fade-up"
            ></img>
            <img
                src={require("../assets/image/resume.jpg")}
                alt={"landscape"}
                style={image}
                data-aos="fade-right"
            ></img>

            <h3 style={h3}>
                인투제이피는 일본 유학과 일본 취업을 위해 만들어진 유학원과 취업센터를 결합한, 일본
                유학 취업 컨설팅 전문 1인 운영 상담소 입니다.
            </h3>
            <Link className="button" to="/schedule" style={button}>
                상담 예약하기 {">"}
            </Link>
        </div>
    )
}
