import React, { useEffect } from "react";

import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";

function App() {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((userAuth) => {
            if (userAuth) {
                //logged
                dispatch(
                    login({
                        uid: userAuth.uid,
                        email: userAuth.email,
                    })
                );
            } else {
                //logged out
                dispatch(logout);
            }
        });
        return unsubscribe;
    }, []);
    return (
        <div className="app">
            <BrowserRouter>
                {!user ? (
                    <LoginScreen />
                ) : (
                    <Routes>
                        <Route exact path="/" element={<HomeScreen />}></Route>
                    </Routes>
                )}

                {/*  <Route path="/YourAccount" element={<HomeScreen />}></Route>
                    <Route path="/1" element={<LoginScreen />}></Route> */}
            </BrowserRouter>
        </div>
    );
}

export default App;
