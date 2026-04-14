import React from "react";

export default function UpgradePage() {
    // Percentage — это шанс выигрыша (от 0 до 100)
    const percentage = 31.86;
    const sweepDegree = (percentage * 360) / 100;

    return (
        <div className="content-area">
            <div className="upgrade-skin-in-upgrade-frame">

                <div className="upgrade-skin-in-frame">
                    <div className="upgrade-skin">
                        <img className="upgrade-skin-img" src="/skins/Knives/Karambit/Karambit_Doppler_Phase_2.png" alt="Karambit"/>
                        <p className="upgrade-skin-name">Karambit | Doppler</p>
                        <p className="upgrade-skin-price">$ 2 234.13</p>
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
                        <img className="upgrade-skin-img" src="/skins/Sniper/AWP/awp_dragon_lore.png" alt="AWP"/>
                        <p className="upgrade-skin-name">AWP | Dragon Lore</p>
                        <p className="upgrade-skin-price">$ 7 012.00</p>
                    </div>
                </div>

            </div>

            <div className="upgrade-buttons-frame">
                <button className="upgrade-button">
                    Upgrade
                </button>
            </div>

            <div className="upgrade-buttons-frame">

                <button className="upgrade-button-x">
                    x20
                </button>
                <button className="upgrade-button-x">
                    x10
                </button>
                <button className="upgrade-button-x">
                    x5
                </button>

                <button className="upgrade-button-percent-30">
                    30%
                </button>
                <button className="upgrade-button-percent-50">
                    50%
                </button>
                <button className="upgrade-button-percent-75">
                    75%
                </button>

                <input
                    type="text"
                    className="upgrade-search"
                    placeholder="Name"
                />
                <input
                    type="text"
                    className="upgrade-search"
                    placeholder="Min price"
                />
                <input
                    type="text"
                    className="upgrade-search"
                    placeholder="Max price"
                />
            </div>

            <div className="upgrade-skins-frame-title">
                <p>You Skins</p>
                <p>Site Skins</p>
            </div>

            <div className="contract-main-frame">

                <div className="contract-main-skin-frame">

                    <div className="contract-main-skin-horizontal-frame">

                        <button className="contract-skin rarity-gold">
                            <p className="contract-skin-name">Karambit | Doppler</p>
                            <img className="contract-skin-img" src="/skins/Knives/Karambit/Karambit_Doppler_Phase_2.png" alt="case" />
                            <p className="contract-skin-price">$ 2 234.13</p>
                        </button>
                        <button className="contract-skin rarity-gold">
                            <p className="contract-skin-name">Karambit | Doppler</p>
                            <img className="contract-skin-img" src="/skins/Knives/Karambit/Karambit_Doppler_Phase_2.png" alt="case" />
                            <p className="contract-skin-price">$ 2 234.13</p>
                        </button>
                        <button className="contract-skin rarity-gold">
                            <p className="contract-skin-name">Karambit | Doppler</p>
                            <img className="contract-skin-img" src="/skins/Knives/Karambit/Karambit_Doppler_Phase_2.png" alt="case" />
                            <p className="contract-skin-price">$ 2 234.13</p>
                        </button>
                        <button className="contract-skin rarity-gold">
                            <p className="contract-skin-name">Karambit | Doppler</p>
                            <img className="contract-skin-img" src="/skins/Knives/Karambit/Karambit_Doppler_Phase_2.png" alt="case" />
                            <p className="contract-skin-price">$ 2 234.13</p>
                        </button>
                        <button className="contract-skin rarity-gold">
                            <p className="contract-skin-name">Karambit | Doppler</p>
                            <img className="contract-skin-img" src="/skins/Knives/Karambit/Karambit_Doppler_Phase_2.png" alt="case" />
                            <p className="contract-skin-price">$ 2 234.13</p>
                        </button>

                    </div>

                </div>

                <div className="contract-main-skin-frame">

                    <div className="contract-main-skin-horizontal-frame">

                        <button className="contract-skin rarity-red">
                            <p className="contract-skin-name">AWP | Dragon Lore</p>
                            <img className="contract-skin-img" src="/skins/Sniper/AWP/awp_dragon_lore.png" alt="case" />
                            <p className="contract-skin-price">$ 7 012.00</p>
                        </button>
                        <button className="contract-skin rarity-red">
                            <p className="contract-skin-name">AWP | Dragon Lore</p>
                            <img className="contract-skin-img" src="/skins/Sniper/AWP/awp_dragon_lore.png" alt="case" />
                            <p className="contract-skin-price">$ 7 012.00</p>
                        </button>
                        <button className="contract-skin rarity-red">
                            <p className="contract-skin-name">AWP | Dragon Lore</p>
                            <img className="contract-skin-img" src="/skins/Sniper/AWP/awp_dragon_lore.png" alt="case" />
                            <p className="contract-skin-price">$ 7 012.00</p>
                        </button>
                        <button className="contract-skin rarity-red">
                            <p className="contract-skin-name">AWP | Dragon Lore</p>
                            <img className="contract-skin-img" src="/skins/Sniper/AWP/awp_dragon_lore.png" alt="case" />
                            <p className="contract-skin-price">$ 7 012.00</p>
                        </button>
                        <button className="contract-skin rarity-red">
                            <p className="contract-skin-name">AWP | Dragon Lore</p>
                            <img className="contract-skin-img" src="/skins/Sniper/AWP/awp_dragon_lore.png" alt="case" />
                            <p className="contract-skin-price">$ 7 012.00</p>
                        </button>

                    </div>

                </div>

            </div>

        </div>
    );
}
