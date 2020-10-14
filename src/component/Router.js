import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Navigation from "./Navigation"
import Home from "../routes/Home"
import Schedule from "../routes/Schedule"
import Important from "../routes/Important"

const AppRouter = ({ userObj, isLoggedIn }) => {
    return (
        <>
            <Router>
                <Navigation isLoggedIn={isLoggedIn} userObj={userObj}></Navigation>
                <div className="wrapper">
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route exact path="/schedule">
                            <Schedule />
                        </Route>
                        <Route exact path="/important">
                            <Important />
                        </Route>
                    </Switch>
                </div>
            </Router>
        </>
    )
}

export default AppRouter
