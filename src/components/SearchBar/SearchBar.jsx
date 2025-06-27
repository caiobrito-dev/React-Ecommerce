import React, {useState} from "react";
import { IoMdSearch } from "react-icons/io";    

import "./SearchBar.css"

function SearchBar () {

    const [searchValue, setValue] = useState("")
    const handleSearch = (event) => {
        event.preventDefault(); 
        alert("teste"); 
    }

    return (
        <form className="SearchBar" onSubmit={handleSearch}>
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