import React from "react";

export default function UpgradePage() {
    // Percentage — это шанс выигрыша (от 0 до 100)
    const percentage = 20.85;
    const sweepDegree = (percentage * 360) / 100;

    return (
        <div className="content-area">
            <div className="upgrade-skin-in-upgrade-frame">

                <div className="upgrade-skin-in-frame">
                    <div className="upgrade-skin">
                        <img className="upgrade-skin-img" src="/skins/Pistols/USP-S/USP-S_Printstream.png" alt="USP-S"/>
                        <p className="upgrade-skin-name">USP-S | Printstream</p>
                        <p className="upgrade-skin-price">$ 34.18</p>
                    </div>
                </div>

                <div className="upgrade-circle-container">
                    <div className="layer bg-circle"></div>

                    <div
                        className="layer rainbow-border"
                        style={{
                            '--sweep': `${sweepDegree}deg`,
                            '--start': '180deg' // Исправил на 180deg
                        }}
                    ></div>

                    <div className="layer middle-border"></div>

                    <div className="layer center-content">
                        <div className="percentage">{percentage.toFixed(2)} %</div>
                        <div className="label">Normal chance</div>
                    </div>
                </div>

                <div className="upgrade-skin-in-frame">
                    <div className="upgrade-skin">
                        <img className="upgrade-skin-img" src="/skins/Rifles/AK-47/AK-47_Case_Hardened.png" alt="AK-47"/>
                        <p className="upgrade-skin-name">AK-47 | Case Hardened</p>
                        <p className="upgrade-skin-price">$ 163.87</p>
                    </div>
                </div>

            </div>
        </div>
    );
}
