
import React from "react";

export default function ProfilePage() {
    return (
        <div className="content-area">
            <div className="profile-title">
                <p>Profile</p>
            </div>

                <div className="profile-buttons-frame">

                    <div className="horizontal-profile">

                        <div className="profile-card">
                            <p className="card-label">Trade URL</p>

                            <input
                                type="text"
                                className="profile-set-input"
                                placeholder="You trade URL"
                            />

                            <button className="profile-update-btn">
                                Update
                            </button>
                        </div>

                        <div className="profile-card">
                            <p className="card-label">Email</p>

                            <input
                                type="text"
                                className="profile-set-input"
                                placeholder="You Email"
                            />

                            <button className="profile-update-btn">
                                Update
                            </button>
                        </div>

                        <div className="profile-card">
                            <p className="card-label">Password</p>

                            <input
                                type="text"
                                className="profile-set-input"
                                placeholder="You Password"
                            />

                            <button className="profile-update-btn">
                                Update
                            </button>
                        </div>

                    </div>

                    <div className="horizontal-profile">

                        <div className="profile-card">
                            <p className="card-label">Add Tokens</p>

                            <input
                                type="text"
                                className="profile-set-input"
                                placeholder="Count tokens"
                            />

                            <button className="profile-update-btn">
                                Top up
                            </button>
                        </div>

                        <div className="profile-card">
                            <p className="card-label">Promo-Code</p>

                            <input
                                type="text"
                                className="profile-set-input"
                                placeholder="XXXX-XXXX-XXXX"
                            />

                            <button className="profile-update-btn">
                                Apply
                            </button>
                        </div>

                    </div>

                </div>

            <div className="profile-title">
                <p>You Skins</p>
            </div>
            <button className="profile-update-btn-sell-all">
                Sell All
            </button>
            <div className="profile-skin-frame">

                <div className="profile-skin-frame-horizontal">

                    <div className="profile-skin rarity-red">
                        <p className="profile-skin-name">AWP | Gungnir</p>
                        <img className="profile-skin-img" src="/skins/Sniper/AWP/awp_gungnir.png"/>
                        <p className="profile-skin-price">$ 17 950.00</p>

                        <div className="profile-skins-button-horizontal">
                            <button className="profile-skins-button">Cntrct</button>
                            <button className="profile-skins-button">Upgr</button>
                            <button className="profile-skins-button">Sell</button>
                            <button className="profile-skins-button">Steam</button>
                        </div>
                    </div>


                </div>

            </div>

        </div>
    );
}
