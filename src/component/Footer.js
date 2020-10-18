import React from "react"
import { Link } from "react-router-dom"
import styled, { css } from "styled-components"
import { RiMailStarLine, RiChat1Line, RiKakaoTalkLine } from "react-icons/ri"

// styled-component

const Foot = styled.footer`
    display: flex;
    padding: 4rem 2rem;
    > .footer--about {
        flex: 8;
        h4 {
            font-weight: bold;
            padding-bottom: 10px;
            margin-bottom: 20px;
            border-bottom: 1px solid #ccc;
            color: #9fa6b2;
        }
        p {
            font-size: 12px;
            margin-bottom: 6px;
            color: #555;
        }
    }
    > .footer--icons {
        flex: 1;
        font-size: 30px;
        color: #9fa6b2;
        margin-left: 40px;
    }
`

export default function Footer() {
    return (
        <Foot>
            <div className="footer--about">
                <h4>인투제이피 / INTOJP</h4>
                <p>대표자 성명 : @@@</p>
                <p>이메일 : intojpproject@gmail.com</p>
                <p>사이트 제작 : DDDieon</p>
            </div>
            <div className="footer--icons">
                <RiMailStarLine /> <RiChat1Line /> <RiKakaoTalkLine />
            </div>
        </Foot>
    )
}
