
import React from "react";

export default function RegisterPage() {
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

                <div className="register-data-type">
                    <p>Trade URL:</p>
                    <div className="register-input">

                        <input
                            type="text"
                            className="register-input"
                            placeholder="URL"
                        />

                    </div>
                </div>

            </div>

            <button className="register-button">
                Submit
            </button>

        </div>
    );
}
