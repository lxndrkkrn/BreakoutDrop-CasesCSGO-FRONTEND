
import React from "react";

export default function LoginPage() {
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
                        />

                    </div>
                </div>

            </div>

            <button className="register-button">
                Login
            </button>

        </div>
    );
}
