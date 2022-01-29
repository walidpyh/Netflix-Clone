import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Nav.css";

function Nav() {
    const [show, handleShow] = useState(false);
    const navigate = useNavigate();

    const transitionNavBar = () => {
        if (window.scrollY > 100) {
            handleShow(true);
        } else {
            handleShow(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar);
        return () => window.removeEventListener("scroll", transitionNavBar);
    }, []);

    return (
        <div className={`nav ${show && "nav_black"}`}>
            <div className="nav_contents">
                <img
                    src="/assets/images/logo.png"
                    className="nav_logo"
                    onClick={() => navigate("/")}
                />

                <ul className="nav_menu">
                    <li
                        className="nav_menu_selected"
                        onClick={() => navigate("/")}
                    >
                        Home
                    </li>
                    <li>TV Shows</li>
                    <li>Movies</li>
                    <li>New & Popular</li>
                    <li>My List</li>
                </ul>

                <img
                    src="/assets/images/profile.png"
                    className="nav_avatar"
                    onClick={() => navigate("/youraccount")}
                />
            </div>
        </div>
    );
}

export default Nav;
