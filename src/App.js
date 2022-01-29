import React, { useEffect } from "react";

import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { auth } from "./firebase";

function App() {
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((userAuth) => {
            if (userAuth) {
                //logged
            } else {
                //logged out
            }
        });
        return unsubscribe;
    }, []);
    return (
        <div className="app">
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<HomeScreen />}></Route>
                    <Route path="/YourAccount" element={<HomeScreen />}></Route>
                    <Route path="/1" element={<LoginScreen />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
