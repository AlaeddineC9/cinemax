import React, { useState } from "react";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import Card from "./Card.jsx";
import Database from "../assets/database.json"

export default function Favorites() {
    const [movies, setMovies] = useState(Database);
    return (
        <>
            <Navbar />
            <h1 className="mt-10 mb-5 text-3xl font-bold text-center">Favorites</h1>
            {movies.length > 0 ? (
                <Card movies={movies} />) : (
                <p className="mt-10 text-2xl font-bold text-center">
                    No favorite movie, add one for begin
                </p>
            )}

            <Footer />
        </>
    );
}