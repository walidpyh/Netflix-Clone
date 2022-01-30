import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { auth } from "../firebase";
import Nav from "../Nav";
import "./AccountScreen.css";
import PlansScreen from "./PlansScreen";

function AccountScreen() {
    const user = useSelector(selectUser);
    return (
        <div className="accountScreen">
            <Nav />
            <div className="accountScreen_body">
                <h1>Account</h1>

                <div className="accountScreen_info">
                    <img src="/assets/images/profile.png" alt="" />
                    {/*  <h3 className="accountScreen_membership">
                        Membership & Billing
                    </h3>
                    <button className="accountScreen_cancel">
                        Cancel Membership
                    </button> */}
                    <div className="accountScreen_details">
                        <h2>{user.email}</h2>
                        <div className="accountScreen_plans">
                            <h3>Plans</h3>
                            <PlansScreen />

                            <button
                                className="accountScreen_signout"
                                onClick={() => {
                                    auth.signOut();
                                }}
                            >
                                Sign Out
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AccountScreen;
