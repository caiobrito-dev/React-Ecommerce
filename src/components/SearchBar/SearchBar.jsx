import React from "react";
import { IoMdSearch } from "react-icons/io";    

import "./SearchBar.css"

function SearchBar () {
    return (
        <form className="SearchBar">
            <input type="search" placeholder="Buscar produto" className="SearchInput" required/>
            <button type="submit" className="SearchButton"><IoMdSearch /></button>
        </form>
    );
}

export default SearchBar