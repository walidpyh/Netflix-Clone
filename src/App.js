import React from "react";

import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
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
