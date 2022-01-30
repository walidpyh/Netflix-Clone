import React from "react";
import "./PlansScreen.css";

function PlansScreen() {
    return (
        <div className="plansScreen">
            <br />
            <p>Renewal date: 01/01/2055</p>
            <div className="plansScreen__plan">
                <div className="plansScreen__info">
                    <h5>Netflix Standard</h5>
                    <h6>1080p</h6>
                </div>

                <button className="plansScreen__plan__button">Subscribe</button>
            </div>
            <div className="plansScreen__plan">
                <div className="plansScreen__info">
                    <h5>Netflix Basic</h5>
                    <h6>480p</h6>
                </div>

                <button className="plansScreen__plan__button">Subscribe</button>
            </div>
            <div className="plansScreen__plan">
                <div className="plansScreen__info">
                    <h5>Netflix Premium</h5>
                    <h6>4k+HDR</h6>
                </div>

                <button className="plansScreen__plan__current">
                    Current Package
                </button>
            </div>
        </div>
    );
}

export default PlansScreen;
