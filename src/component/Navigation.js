import React from "react"
import { Link } from "react-router-dom"
import styled, { css } from "styled-components"

const Ulist = styled.ul`
    display: flex;
    background: rgba(30, 30, 40, 0.45);
    margin-bottom: 30px;
`

const ListBox = styled.li`
    a {
        display: block;
        padding: 20px;
    }
`
export default function Navigation() {
    return (
        <nav>
            <Ulist>
                <ListBox>
                    <Link to="/">
                        <h1>Intojp</h1>
                    </Link>
                </ListBox>
                <ListBox>
                    <Link to="/schedule">스케쥴</Link>
                </ListBox>
            </Ulist>
        </nav>
    )
}
