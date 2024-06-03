import React from 'react';
import logo from '../../public/Logo.png';
import {Link} from "react-router-dom";

export default function Navbar() {
    return (
        <>
            <div className="flex items-center justify-between px-5">
                <h2>
                    <Link to="/">
                    <img src={ logo } alt="Logo Cinemax" width="250px" />
                    </Link>
                </h2>
                <div className="flex items-center gap-5 mt-7">
                    <Link to="/">Home</Link>
                    <Link to="/Favorites">Favorites</Link>
                    <Link to="/Account" className="px-4 py-2 text-white bg-orange-500 rounded-full">Login</Link>
                </div>
            </div>
        </>
    );
}