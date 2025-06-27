import React, {useState, useContext} from "react";
import { IoMdSearch } from "react-icons/io";    

import "./SearchBar.css"
import AppContext from "../../context/AppContext";

function SearchBar () {

    const [searchValue, setValue] = useState("")

    const {setProducts} = useContext(AppContext)
     
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