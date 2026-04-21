
import React, {useState} from "react";
import {Link} from "react-router-dom";
import {loginUser} from "../api/auth-api.js";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async () => {

        const data = {
            email: email,
            password: password
        };

        try {
            const result = await loginUser(data);
            console.log("УСПЕХ:", result);
        } catch (error) {
            console.error("ОШИБКА В handleSubmit:", error);
        }
    };

    return (
        <div className="content-area">

            <div className="register-title">
                <p>Login</p>
            </div>

            <div className="register-frame">

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

            </div>

            <button onClick={handleSubmit} className="register-button">
                Login
            </button>

            <div className="registerOrLogin-title">
                <Link to="/register">
                    <p>Don't have an account? Register</p>
                </Link>
            </div>

        </div>
    );
}
