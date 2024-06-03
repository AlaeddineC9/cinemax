import React from "react";
import {Link} from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
export default function Account() {
    return (
        <>
        <Navbar/>
        <p>Favorites</p>
        <Link to="/">Home</Link>
        <Link to="/Account" >Account</Link>
        <Footer/>
        </>
    )
}