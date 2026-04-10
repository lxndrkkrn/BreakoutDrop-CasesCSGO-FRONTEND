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
            <div className="case-open-button-frame">
                <button className="case-open-button">
                    <p>Open Case</p>
                    <p className="case-open-price">$ 999.00</p>
                </button>
            </div>

            <div className="case-title">
                <p className="case-category-title">Contents of the case:</p>
            </div>

            <div className="profile-skin-frame">

                <div className="profile-skin-frame-horizontal">

                    <div className="case-skin rarity-gold">
                        <p className="case-skin-name">Karambit | Doppler</p>
                        <img className="case-skin-img" src="/skins/Knives/Karambit/Karambit_Doppler_Phase_2.png"/>
                        <p className="case-skin-price">$ 2 234.13</p>
                    </div>

                    <div className="case-skin rarity-red">
                        <p className="case-skin-name">AWP | Gungnir</p>
                        <img className="case-skin-img" src="/skins/Sniper/AWP/awp_gungnir.png"/>
                        <p className="case-skin-price">$ 17 950.00</p>
                    </div>

                    <div className="case-skin rarity-red">
                        <p className="case-skin-name">AWP | Dragon Lore</p>
                        <img className="case-skin-img" src="/skins/Sniper/AWP/awp_dragon_lore.png"/>
                        <p className="case-skin-price">$ 7 012.00</p>
                    </div>

                    <div className="case-skin rarity-magenta">
                        <p className="case-skin-name">M4A1-S | Hot-Rod</p>
                        <img className="case-skin-img" src="/skins/Rifles/M4A1-S/M4A1-S_Hot_Rod.png"/>
                        <p className="case-skin-price">$ 2 546.28</p>
                    </div>

                    <div className="case-skin rarity-magenta">
                        <p className="case-skin-name">UMP-45 | Fade</p>
                        <img className="case-skin-img" src="/skins/SGs/UMP-45/UMP-45_Fade.png"/>
                        <p className="case-skin-price">$ 471.65</p>
                    </div>

                </div>

                <div className="profile-skin-frame-horizontal">

                    <div className="case-skin rarity-magenta">
                        <p className="case-skin-name">MP9 | Wild Lily</p>
                        <img className="case-skin-img" src="/skins/SGs/MP9/MP9_Wild_Lily.png"/>
                        <p className="case-skin-price">$ 2 110.59</p>
                    </div>

                    <div className="case-skin rarity-purple">
                        <p className="case-skin-name">Glock-18 | Fade</p>
                        <img className="case-skin-img" src="/skins/Pistols/Glock-18/Glock-18_Fade.png"/>
                        <p className="case-skin-price">$ 2 234.24</p>
                    </div>

                    <div className="case-skin rarity-purple">
                        <p className="case-skin-name">Tec-9 | Nuclear Threat</p>
                        <img className="case-skin-img" src="/skins/Pistols/Tec-9/Tec-9_Nuclear_Threat.png"/>
                        <p className="case-skin-price">$ 1 199.22</p>
                    </div>

                    <div className="case-skin rarity-purple">
                        <p className="case-skin-name">Galil AR | Cerberus</p>
                        <img className="case-skin-img" src="/skins/Rifles/GalilAR/Galil_AR_Cerberus.png"/>
                        <p className="case-skin-price">$ 463.67</p>
                    </div>

                    <div className="case-skin rarity-purple">
                        <p className="case-skin-name">P90 | Astral Jormungandr</p>
                        <img className="case-skin-img" src="/skins/SGs/P90/P90_Astral_Jörmungandr.png"/>
                        <p className="case-skin-price">$ 487.00</p>
                    </div>

                </div>

                <div className="profile-skin-frame-horizontal">

                    <div className="case-skin rarity-blue">
                        <p className="case-skin-name">AK-47 | Green Laminate</p>
                        <img className="case-skin-img" src="/skins/Rifles/AK-47/AK-47_Green_Laminate.png"/>
                        <p className="case-skin-price">$ 185.00</p>
                    </div>

                    <div className="case-skin rarity-blue">
                        <p className="case-skin-name">M4A4 | Radiation Hazard</p>
                        <img className="case-skin-img" src="/skins/Rifles/M4A1/M4A4_Radiation_Hazard.png"/>
                        <p className="case-skin-price">$ 157.91</p>
                    </div>

                    <div className="case-skin rarity-blue">
                        <p className="case-skin-name">MAC-10 | Fade</p>
                        <img className="case-skin-img" src="/skins/SGs/MAC-10/MAC-10_Fade.png"/>
                        <p className="case-skin-price">$ 141.31</p>
                    </div>

                    <div className="case-skin rarity-blue">
                        <p className="case-skin-name">SSG 03 | Orange Filigree</p>
                        <img className="case-skin-img" src="/skins/Sniper/SSG08/SSG_08_Orange_Filigree.png"/>
                        <p className="case-skin-price">$ 51.84</p>
                    </div>

                    <div className="case-skin rarity-blue">
                        <p className="case-skin-name">Negev | Anodized Navy</p>
                        <img className="case-skin-img" src="/skins/Heavy/Negev/Negev_Anodized_Navy.png"/>
                        <p className="case-skin-price">$ 962.71</p>
                    </div>

                </div>

            </div>

        </div>
    );
}
