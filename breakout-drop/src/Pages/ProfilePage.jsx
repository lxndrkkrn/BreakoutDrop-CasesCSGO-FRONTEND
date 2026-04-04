import {Link} from "react-router-dom";

import DreamsNightmares from "../assets/Case/DreamsNightmares.png";


import React from "react";

export default function ProfilePage() {
    return (
        <div className="content-area">

            <div className="button-frame">
                <Link to="/cases" className="case-frame">
                    <img className="button-img" src={DreamsNightmares} />
                </Link>
            </div>

        </div>
    );
}
