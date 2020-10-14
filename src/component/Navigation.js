import React from "react"
import { authService, firebaseInstance } from "fbase"
import { Link } from "react-router-dom"
import styled, { css } from "styled-components"

// styled-component

const Nav = styled.nav`
    display: flex;
    background: lightblue;
`

const Ulist = styled.ul`
    display: flex;
    flex: 1;
`

const ListBox = styled.li`
    > * {
        display: block;
        padding: 1em;
        border-right: 1px solid rgb(233, 244, 248);
    }
`
const Button = styled(Link)`
    display: "block";
    padding: "1em";
    cursor: "pointer";
    border-left: 1px solid #fff;
    background-color: rgb(233, 244, 248);
`
const padding = {
    padding: "1em",
}
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
            {!isLoggedIn && (
                <Button to="/" onClick={LoginAdmin} style={padding}>
                    Login
                </Button>
            )}
        </Nav>
    )
}
