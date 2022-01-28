import React from "react";
import "./Banner.css";

function Banner() {
    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n - 1) + "..." : string;
    }
    return (
        <header
            className="banner"
            style={{
                backgroundSize: "cover",
                backgroundPosition: "center center",
                backgroundImage: `url(./assets/images/banner.jpg)`,
            }}
        >
            <div className="banner_contents">
                <h1 className="banner_title">IN FROM THE COLD</h1>
                <div className="banner_buttons">
                    <button className="banner_button">Play</button>
                    <button className="banner_button">More Info</button>
                </div>
                <h1 className="banner_description">
                    {truncate(`This is a test .`, 150)}
                </h1>
            </div>
            <div className="banner--fadeBottom" />
        </header>
    );
}

export default Banner;
