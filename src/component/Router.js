import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Navigation from "./Navigation"
import Home from "../routes/Home"
import Schedule from "../routes/Schedule"
import Important from "../routes/Important"

const AppRouter = () => {
    return (
        <>
            <Router>
                <Navigation></Navigation>
                <div className="wrapper">
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/schedule">
                        <Schedule />
                    </Route>
                    <Route exact path="/important">
                        <Important />
                    </Route>
                </div>
            </Router>
        </>
    )
}

export default AppRouter
