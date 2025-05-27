import React from "react";
import { IoCartOutline } from "react-icons/io5";

import "./CartButton.css"

function CartButton() { 
    return(
        <button type="button" className="cartButton">
            <IoCartOutline />
            <span className="cartStatus">2</span>
        </button>
    );
}

export default CartButton