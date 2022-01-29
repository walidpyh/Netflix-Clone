import React, { useEffect } from "react";

import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import AccountScreen from "./screens/AccountScreen";

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
                dispatch(logout());
            }
        });
        return unsubscribe;
    }, [dispatch]);

    return (
        <div className="app">
            <BrowserRouter>
                {!user ? (
                    <LoginScreen />
                ) : (
                    <Routes>
                        <Route exact path="/" element={<HomeScreen />}></Route>
                        <Route
                            exact
                            path="/youraccount"
                            element={<AccountScreen />}
                        ></Route>
                    </Routes>
                )}
            </BrowserRouter>
        </div>
    );
}

export default App;
