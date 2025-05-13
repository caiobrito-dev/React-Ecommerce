import React from "react"
import SearchBar from "../SearchBar/SearchBar";

import "./Header.css"

function Header() {
    return (
        <header className="header">
            <div className="TopContainer">
                <SearchBar/>
                <button>cart</button>
            </div>
        </header>
    );
}

export default Header