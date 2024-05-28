import React from "react";
import Logo from '../../public/Logo.png'
export default function Navbar() {
    return (
        <>
            <div className="lg:flex lg:items-center lg:justify-between">
                <div className="min-w-0 flex-1">
                    <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight"><img src={Logo} alt="" width="300px" /></h2>
                </div>
                <div className="mt-5 flex lg:ml-4 lg:mt-0">
                    <a href="#">Search</a>
                    <a href="#" className="ml-3 sm:block">Favotites</a>

                    <a href="#" className="inline-flex items-center rounded-full bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                        Login </a>
                </div>
            </div>

        </>
    )
}