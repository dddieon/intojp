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
    > * {
        display: block;
        padding: 1em;
        border-right: 1px solid rgb(233, 244, 248);
    }
`
const Button = styled.button`
    display: "block";
    padding: "1em";
    cursor: "pointer";
    border-left: 1px solid #fff;
    background-color: rgb(233, 244, 248);
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
                    <Link to="/schedule">상담예약</Link>
                </ListBox>
                <ListBox>
                    <Link to="/important">공지사항</Link>
                </ListBox>
            </Ulist>
            <Button>ADMIN</Button>
        </Nav>
    )
}
