import React from "react";
import {CASE_IMAGES} from "../cases.js";

export default function CasePage() {
    return (
        <div className="content-area">

            <div className="case-title">
                <p className="case-category-title">Category</p>
                <p className="case-name-title">Name</p>
            </div>

            <div className="case-box-img">
                <img className="case-box-img-frame" src={CASE_IMAGES.Kilowatt} />
            </div>

        </div>
    );
}
