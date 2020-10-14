import React from "react"
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom"
import Navigation from "./Navigation"
import Home from "../routes/Home"
import Schedule from "../routes/Schedule"
import Important from "../routes/Important"

const AppRouter = ({ userObj, isLoggedIn }) => {
    return (
        <>
            <Router basename={process.env.PUBLIC_URL}>
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
                        <Redirect path="*" to="/" />
                    </Switch>
                </div>
            </Router>
        </>
    )
}

export default AppRouter
