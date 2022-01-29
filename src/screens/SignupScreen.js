import React, { useRef } from "react";
import { auth } from "../firebase";
import "./SignupScreen.css";

function SignUpScreen() {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const register = (e) => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        )
            .then((authUser) => {})
            .catch((error) => {
                alert(error.message);
            });
    };

    const signIn = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        )
            .then((authUser) => {})
            .catch((error) => {
                alert(error.message);
            });
    };

    return (
        <div className="singupScreen">
            <form className="signupScreen_form">
                <h1>Sign In</h1>
                <input ref={emailRef} placeholder="Email" type="email" />
                <input
                    ref={passwordRef}
                    placeholder="Password"
                    type="password"
                />
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
