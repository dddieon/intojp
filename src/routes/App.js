import React, { useEffect, useState } from "react"
import AppRouter from "../component/Router"
import { authService, firebaseInstance } from "fbase"

function App() {
    const [userObj, setUserObj] = useState(null)
    useEffect(() => {
        authService.onAuthStateChanged((user) => {
            if (user) {
                setUserObj({
                    displayName: user.displayName,
                    uid: user.uid,
                    updateProfile: (args) => user.updateProfile(args),
                })
                // userObj설정
            } else {
                setUserObj(null)
                // 로그아웃
            }
            console.log("유저상태" + userObj)
        })
    }, [])
    return <AppRouter isLoggedIn={Boolean(userObj)} userObj={userObj}></AppRouter>
}

export default App
