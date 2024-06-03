import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import LoginForm from "./LoginForm.jsx";

export default function Account() {
    return (
        <>
            <Navbar />
            <LoginForm />

    

            <Footer />
        </>
    )
}