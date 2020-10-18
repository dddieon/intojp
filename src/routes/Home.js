import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import Aos from "aos"
import "aos/dist/aos.css"
import styled, { css } from "styled-components"
import { ImQuotesLeft } from "react-icons/im"
import { IoIosArrowForward } from "react-icons/io"

const MainDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 100px;
`
const Div = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 40px;
    margin-bottom: 10px;
    overflow: hidden;
    img {
        max-width: 35%;
        margin-left: 30px;
    }
    p {
        font-size: 30px;
        font-weight: bold;
        line-height: 1.5;
    }
    @media (max-width: 768px) {
        flex-direction: column;
        p {
            text-align: center;
            margin-bottom: 10px;
        }
        img {
            max-width: 100%;
            margin-left: 0;
        }
    }
`
const ImageBoxes = styled.div`
    display: flex;
    width: 100%;
    img {
        display: block;
        flex: 1;
        max-width: 33%;
    }
`
const TextBoxes = styled.div`
    width: 100%;
    text-align: center;
    background: #eee;
    padding: 50px;
    margin-bottom: 10px;
    h3 {
        font-size: 16px;
        font-weight: bold;
        margin-bottom: 30px;
    }
    p {
        line-height: 1.5;
    }
`
const Button = styled(Link)`
    display: block;
    padding: 1.2em;
    color: #222;
    margin: 5px;
    border: 1px solid #222;
    &:hover {
        background: black;
        color: #fefefe;
        transition: 0.2s ease-in;
    }
`

const quote = {
    display: "block",
    fontSize: "2em",
    margin: "10px auto",
    marginBottom: "0.4em",
}

function Home() {
    useEffect(() => {
        Aos.init({ duration: 1000 })
    })

    return (
        <MainDiv className="box">
            <Div className="box--info">
                <h2>
                    <ImQuotesLeft style={quote} />
                    일본유학 및 취업에 대한 최고의 맞춤상담을 제공합니다<p>인투제이피</p>
                </h2>
                <img
                    src={require("../assets/image/interview.jpg")}
                    alt={"landscape"}
                    data-aos="fade-left"
                ></img>
            </Div>
            <ImageBoxes className="box--iamges">
                <img
                    src={require("../assets/image/resume.jpg")}
                    alt={"landscape"}
                    data-aos="fade-right"
                ></img>
                <img
                    src={require("../assets/image/resume.jpg")}
                    alt={"landscape"}
                    data-aos="fade-right"
                ></img>
                <img
                    src={require("../assets/image/resume.jpg")}
                    alt={"landscape"}
                    data-aos="fade-right"
                ></img>
            </ImageBoxes>
            <TextBoxes className="box--text">
                <h3>검증된 실력, 무한한 신뢰를 바탕으로</h3>
                <p>인투제이피는 일본 유학 취업 컨설팅 전문 1인 운영 상담소 입니다.</p>
                <p>일본 유학과 일본 취업을 위해 만들어진 유학원과 취업센터를 결합한 형태로, </p>
                <p>실력으로 수차례 인증된 전문가만의 코칭을 해드립니다.</p>
            </TextBoxes>
            <div style={{ display: "flex" }}>
                <Button className="button" to="/schedule">
                    상담 예약하기 {<IoIosArrowForward />}
                </Button>
                <Button className="button" to="/important">
                    공지사항 보기 {<IoIosArrowForward />}
                </Button>
            </div>
        </MainDiv>
    )
}
export default Home
