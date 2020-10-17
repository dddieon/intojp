import React from "react"
import { authService, firebaseInstance } from "fbase"
import { Link } from "react-router-dom"
import styled, { css } from "styled-components"

// styled-component

const Nav = styled.nav`
    display: flex;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
    font-weight: 500;
    > * :hover {
        color: rgb(89, 205, 255);
    }
`

const Ulist = styled.ul`
    display: flex;
    flex: 1;
`

const ListBox = styled.li`
    > a {
        display: block;
        padding: 1.5em;
        @media (max-width: 768px) {
            padding: 0.5em;
        }
    }
`
const Button = styled.button`
    display: block;
    cursor: pointer;
    border-left: 1px solid #fff;
    padding: 1.5em;
    line-height: 1;
    font-weight: bold;
    @media (max-width: 768px) {
        padding: 0.5em;
    }
`

// 함수

const LoginAdmin = async (event) => {
    const provider = new firebaseInstance.auth.GoogleAuthProvider()
    await authService.signInWithPopup(provider)
}
export default function Navigation({ isLoggedIn }) {
    return (
        <Nav>
            <Ulist>
                <ListBox>
                    <Link to="/">
                        <h1>Intojp</h1>
                    </Link>
                </ListBox>
                <ListBox>
                    <Link to="/schedule">상담예약</Link>
                </ListBox>
                <ListBox>
                    <Link to="/important">공지사항</Link>
                </ListBox>
            </Ulist>
            <Button onClick={LoginAdmin}>Login</Button>
        </Nav>
    )
}
