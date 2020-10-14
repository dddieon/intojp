import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Home from "../routes/Home"
import Schedule from "../routes/Schedule"
import Navigation from "./Navigation"

const AppRouter = () => {
    return (
        <>
            <Router>
                <Navigation></Navigation>
                <div className="wrapper">
                    <Route exact path="/">
                        <Home></Home>
                    </Route>
                    <Route exact path="/schedule">
                        <Schedule></Schedule>
                    </Route>
                </div>
            </Router>
        </>
    )
}

export default AppRouter
