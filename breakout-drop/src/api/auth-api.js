import {Link} from "react-router-dom";
import {CASE_IMAGES} from "../cases.js";

export const registerUser = async (userData) => {

    const response = await fetch('http://localhost:8080/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(userData)
    });

    return await response.text();
}

export const loginUser = async (userData) => {

    const response = await fetch('http://localhost:8080/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(userData)
    });

    return await response.text();
}

export const logoutUser = async (userData) => {

    const response = await fetch('http://localhost:8080/auth/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(userData)
    });

    return await response.text();
}
