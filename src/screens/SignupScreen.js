import React from "react";
import "./SignupScreen.css";

function SignUpScreen() {
    const register = (e) => {
        e.preventDefault();
    };

    const signIn = (e) => {
        e.preventDefault();
    };

    return (
        <div className="singupScreen">
            <form className="signupScreen_form">
                <h1>Sign In</h1>
                <input placeholder="Email" type="email" />
                <input placeholder="Password" type="password" />
                <button
                    className="signupScreen_button"
                    type="submit"
                    onClick={signIn}
                >
                    Sign In
                </button>

                <h4>
                    <span className="signupScreen_gray">New to Netflix? </span>
                    <span className="signupScreen_link" onClick={register}>
                        Sign up now.
                    </span>
                </h4>
            </form>
        </div>
    );
}

export default SignUpScreen;
