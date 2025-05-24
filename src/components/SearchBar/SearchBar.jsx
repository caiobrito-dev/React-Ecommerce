import React, {useState} from "react";
import { IoMdSearch } from "react-icons/io";    

import "./SearchBar.css"

function SearchBar () {
    const [searchValue, setValue] = useState("")
    return (
        <form className="SearchBar">
            <input type="search" 
            placeholder="Buscar produto" 
            className="SearchInput" required 
            onChange={ ( {target} ) => setValue(target.value)} 
            value={searchValue} />

            <button type="submit" className="SearchButton"><IoMdSearch /></button>
        </form>
    );
}

export default SearchBar