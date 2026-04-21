import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import {CASE_IMAGES} from "./cases.js";

import RegisterPage from "./Pages/RegisterPage.jsx";
import LoginPage from "./Pages/LoginPage.jsx";
import ProfilePage from "./Pages/ProfilePage.jsx";
import CasePage from "./Pages/CasePage.jsx";
import UpgradePage from "./Pages/UpgradePage.jsx";
import ContractPage from "./Pages/ContractPage.jsx";


import "./Styles/Header/header.css";
import "./Styles/Header/headerButtons.css";
import "./Styles/Header/headerOnlinePlayers.css";
import "./Styles/Header/headerBalance.css";
import "./Styles/Header/headerProfile.css";

import "./Styles/Footer/footer.css";
import "./Styles/Footer/footerContent1.css";
import "./Styles/Footer/footerContent2.css";
import "./Styles/Footer/footerContent3.css";
import "./Styles/Footer/footerContent4.css";

import "./Styles/Main/contentFrame.css";

import "./Styles/Main/MainPage/CollectionFrame.css";
import "./Styles/Main/MainPage/infoLine.css";
import "./Styles/Main/MainPage/CollectionFrame.css";
import "./Styles/Main/MainPage/MainHorizontal.css";
import "./Styles/Main/MainPage/CaseFrame.css";
import "./Styles/Main/MainPage/CaseName.css";
import "./Styles/Main/MainPage/CasePrice.css";

import "./Styles/Main/ProfilePage/profileTitle.css";
import "./Styles/Main/ProfilePage/profileButtons.css";
import "./Styles/Main/ProfilePage/profileSkinsFrame.css";
import "./Styles/Main/ProfilePage/profileSkinsButton.css";

import "./Styles/Main/CasePage/CaseTitle.css";
import "./Styles/Main/CasePage/CaseImg.css";
import "./Styles/Main/CasePage/CaseOpenButton.css";
import "./Styles/Main/CasePage/CaseSkinFrame.css";
import "./Styles/Main/CasePage/CaseSkin.css";

import "./Styles/Main/RegisterPage/RegisterTitle.css";
import "./Styles/Main/RegisterPage/RegisterFrame.css";
import "./Styles/Main/RegisterPage/LoginRegisterURL.css";

import "./Styles/Main/UpgradePage/UpgradeFrame.css";
import "./Styles/Main/UpgradePage/UpgradeSkin.css";
import "./Styles/Main/UpgradePage/UpgradeButton.css";
import "./Styles/Main/UpgradePage/UpgradeButtonPercent.css";
import "./Styles/Main/UpgradePage/UpgradeSkinsFrame.css";
import "./Styles/Main/UpgradePage/UpgradeSkinButton.css";

import "./Styles/Main/ContractPage/WonSkinFrame.css";
import "./Styles/Main/ContractPage/SkinsListTitle.css";
import "./Styles/Main/ContractPage/ContractFrame.css";
import "./Styles/Main/ContractPage/ContractSkinFrame.css";
import "./Styles/Main/ContractPage/ContractText.css";
import "./Styles/Main/ContractPage/SignTheContract.css";

import "../src/index.css";
import "./Styles/rarities.css";

import mainButtonImg from "./assets/MainButton.png";
import caseButtonImg from "./assets/CaseButton.png";
import upgradeButtonImg from "./assets/UpgradeButton.png";
import contractButtonImg from "./assets/ContractButton.png";

import onlinePlayersImg from "./assets/onlinePlayersCount.png";
import breakout from "./assets/Breakout.jpg";

import {logoutUser} from "./api/auth-api.js";
import {useEffect, useState} from "react";


function App() {
    const handleSubmit = async () => {

        const data = { };

        try {
            const result = await logoutUser(data);
            console.log("УСПЕХ:", result);
        } catch (error) {
            console.error("ОШИБКА В handleSubmit:", error);
        }
    };

    return (
        <BrowserRouter>
            <header className="header-frame">

                <div className="header-down-frame">

                    <div className="button-frame">
                        <Link to="/login" className="button-text">BREAKOUT-DROP</Link>
                        <Link to="/login">
                            <img className="button-img" src={mainButtonImg} />
                        </Link>
                    </div>
                    <div className="button-frame">
                        <Link to="/" className="button-text">CASE</Link>
                        <Link to="/">
                            <img className="button-img" src={caseButtonImg} style={{ transform: 'scale(1.35)'}} />
                        </Link>
                    </div>
                    <div className="button-frame">
                        <Link to="/upgrade" className="button-text">UPGRADE</Link>
                        <Link to="/upgrade">
                            <img className="button-img" src={upgradeButtonImg} />
                        </Link>
                    </div>
                    <div className="button-frame">
                        <Link to="/contract" className="button-text">CONTRACT</Link>
                        <Link to="/contract">
                            <img className="button-img" src={contractButtonImg} style={{ transform: 'rotate(-24deg) scale(1.25)'}} />
                        </Link>
                    </div>

                    <div className="onlinePlayers-frame">
                        <img className="onlinePlayers-img" src={onlinePlayersImg} />
                        <p className="onlinePlayers-online">00000</p>
                    </div>

                    <div className="balance-frame">
                        <p className="balance-text">Balance:</p>
                        <p className="balance-count">00000</p>
                    </div>

                    <div>
                        <Link to="/profile">
                            <img className="profile-frame"  src={breakout} />
                        </Link>
                    </div>

                </div>
            </header>

            <div>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/profile" element={<ProfilePage />} />
                    <Route path="/case/:id" element={<CasePage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/upgrade" element={<UpgradePage />} />
                    <Route path="/contract" element={<ContractPage />} />
                </Routes>
            </div>

            <footer>
                <div className="footer-frame">

                    <div className="footer-content-1">
                        <p className="footer-logo-text">BREAKOUT-DROP : SKINS SIMULATOR</p>
                        <img className="footer-logo-img" src={mainButtonImg}/>
                    </div>

                    <div className="footer-stats-row">
                        <div className="stat-block">
                            <p className="gold-text">LEGENDARY</p>
                            <p className="silver-text">We are the market leader and have been working for you since 2026.</p>
                        </div>
                        <div className="stat-block">
                            <p className="gold-text">HONEST</p>
                            <p className="silver-text">Get cool skins quickly and easily</p>
                        </div>
                        <div className="stat-block">
                            <p className="gold-text">UNIQUE</p>
                            <p className="silver-text">We are constantly working on the site's functionality to best meet the needs of our users.</p>
                        </div>
                        <div className="stat-block">
                            <p className="gold-text">RESPONSIVE</p>
                            <p className="silver-text">We always listen to our users' opinions and are ready to help solve any problem.</p>
                        </div>
                    </div>

                    <div className="footer-content-3">

                        <div className="footer-info-contacts">
                            <p className="info-type">Cooperation</p>
                            <p className="info-url">breakoutdrop@gmail.com</p>
                            <p className="info-url"> </p>
                            <p className="info-type">Support</p>
                            <p className="info-url">breakoutdropSupport@gmail.com</p>
                        </div>
                        <div className="footer-info-contacts">
                            <p className="info-type">Social networks</p>
                            <p className="info-url">TikTok: @breakout-drop</p>
                            <p className="info-url">TG: t.me/BreakoutDrop</p>
                            <p className="info-url"> </p>
                            <p className="info-url">coming soon...</p>
                        </div>

                    </div>

                    <div className="footer-content-4">
                        <div className="footer-why-row">

                            <div className="stat-block-2">
                                <p className="blue-text">No real money games</p>
                                <p className="gray-text">All games use virtual credits, which have no cash value.</p>
                            </div>
                            <div className="stat-block-2">
                                <p className="blue-text">No cash prizes</p>
                                <p className="gray-text">Winnings and bonuses cannot be cashed out or exchanged for anything of real value.</p>
                            </div>
                            <div className="stat-block-2">
                                <p className="blue-text">Pure fun</p>
                                <p className="gray-text">Play for fun, compete with friends and improve your skills!</p>
                            </div>

                        </div>
                        <div className="footer-why-row">

                            <div className="stat-block-2">
                                <p className="blue-text">Play for fun!</p>
                                <p className="gray-text">Our platform offers games - a safe way to enjoy without any financial risk.</p>
                            </div>
                            <div className="stat-block-2">
                                <p className="blue-text">For adults only (18+)</p>
                                <p className="gray-text">Access to our games is strictly limited to users under 18 years of age. We monitor compliance with age restrictions.</p>
                            </div>
                            <div className="stat-block-2">
                                <p className="blue-text">Responsible gaming</p>
                                <p className="gray-text">We support fair and responsible gaming, encouraging users to treat games on social platforms as entertainment, not as a source of income.</p>
                            </div>
                        </div>

                        <button onClick={handleSubmit} className="logout-button">
                            Logout
                        </button>

                        <p className="info-url"> </p>
                    </div>

                </div>
            </footer>
        </BrowserRouter>
    );
}

const Home = () => {}

export default App;

export function HomePage() {
    const [cases, setCases] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/breakout-drop/case/find/all')
            .then(res => {
                if (!res.ok) throw new Error("Ошибка сервера");
                return res.json();
            })
            .then(data => {
                if (Array.isArray(data)) {
                    setCases(data);
                } else {
                    console.error("Ожидался массив, а пришло:", data);
                    setCases([]);
                }
            })
            .catch(err => {
                console.error(err);
                setCases([]);
            });
    }, []);


    const groupedCases = cases.reduce((acc, currentCase) => {

        const categories = currentCase.categoryList;

        if (!categories || categories.length === 0) {
            const noCat = "No Category";
            if (!acc[noCat]) acc[noCat] = [];
            acc[noCat].push(currentCase);
            return acc;
        }

        categories.forEach(catName => {
            if (!acc[catName]) {
                acc[catName] = [];
            }
            acc[catName].push(currentCase);
        });

        return acc;
    }, {});


    return (
        <div className="all-collections">
            {Object.entries(groupedCases).map(([categoryName, casesInCategory]) => (
                <div className="collection-frame" key={categoryName}>
                    <div className="info-case-line">
                        {/* Здесь выведется "VALVE" вместо "No Category" */}
                        <p>{categoryName}</p>
                    </div>

                    <div className="main-horizontal">
                        {casesInCategory.map(singleCase => (
                            <div className="case-frame" key={singleCase.id}>
                                <Link to={`/case/${singleCase.id}`} style={{ textDecoration: 'none' }}>
                                    <img src={singleCase.pictureCase} alt={singleCase.name} />
                                    <p className="case-name">{singleCase.name}</p>
                                    <p className="case-price">$ {singleCase.price}</p>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
