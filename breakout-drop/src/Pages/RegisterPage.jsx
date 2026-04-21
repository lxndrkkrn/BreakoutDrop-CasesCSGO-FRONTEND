import React, { useState } from "react";
import { Link } from "react-router-dom";

import {registerUser} from "../api/auth-api.js";

export default function RegisterPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [tradeURL, setTradeURL] = useState("");

    const handleSubmit = async () => {

        const data = {
            name: name,
            email: email,
            password: password,
            tradeURL: tradeURL
        };

        try {
            const result = await registerUser(data);
            console.log("УСПЕХ:", result);
        } catch (error) {
            console.error("ОШИБКА В handleSubmit:", error);
        }
    };

    return (
        <div className="content-area">

            <div className="register-title">
                <p>Registration</p>
            </div>

            <div className="register-frame">

                <div className="register-data-type">
                    <p>Name:</p>
                    <div className="register-input">

                        <input
                            type="text"
                            className="register-input"
                            placeholder="your not real name"
                            onChange={(e) => {setName(e.target.value)}}
                        />

                    </div>
                </div>

                <div className="register-data-type">
                    <p>Email:</p>
                    <div className="register-input">

                        <input
                            type="text"
                            className="register-input"
                            placeholder="example@gmail.com"
                            onChange={(e) => {setEmail(e.target.value)}}
                        />

                    </div>
                </div>

                <div className="register-data-type">
                    <p>Password:</p>
                    <div className="register-input">

                        <input
                            type="password"
                            className="register-input"
                            placeholder="super secret password"
                            onChange={(e) => {setPassword(e.target.value)}}
                        />

                    </div>
                </div>

                <div className="register-data-type">
                    <p>Trade URL:</p>
                    <div className="register-input">

                        <input
                            type="text"
                            className="register-input"
                            placeholder="URL"
                            onChange={(e) => {setTradeURL(e.target.value)}}
                        />

                    </div>
                </div>

            </div>

            <button onClick={handleSubmit} className="register-button">
                Submit
            </button>

            <div className="registerOrLogin-title">
                <Link to="/login">
                    <p className="registerOrLogin-title">Have an account? Login</p>
                </Link>
            </div>

        </div>
    );
}
