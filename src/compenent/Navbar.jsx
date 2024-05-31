import React from 'react';
import logo from '../../public/Logo.png';

export default function Navbar() {
    return (
        <>
            <div className="flex items-center justify-between px-5">
                <h2>
                    <img src={ logo } alt="Logo Cinemax" width="250px" />
                </h2>
                <div className="flex items-center gap-5 mt-7">
                    <a href="#">Search</a>
                    <a href="#" className="">Favorites</a>
                    <a href="#" className="px-4 py-2 text-white bg-orange-500 rounded-full">Login</a>
                </div>
            </div>
        </>
    );
}