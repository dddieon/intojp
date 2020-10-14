import React from "react"
import { Link } from "react-router-dom"
import styled, { css } from "styled-components"

const Nav = styled.nav`
    display: flex;
    background: lightblue;
`

const Ulist = styled.ul`
    display: flex;
    flex: 1;
`

const ListBox = styled.li`
    a {
        display: block;
        padding: 20px;
    }
`
export default function Navigation() {
    return (
        <Nav>
            <Ulist>
                <ListBox>
                    <Link to="/">
                        <h1>Intojp</h1>
                    </Link>
                </ListBox>
                <ListBox>
                    <Link to="/schedule">상담 예약하기</Link>
                </ListBox>
                <ListBox>
                    <Link to="/important">공지사항</Link>
                </ListBox>
            </Ulist>
            <button>관리자 로그인</button>
        </Nav>
    )
}
