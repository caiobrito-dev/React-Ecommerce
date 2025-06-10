import React from "react";
import "./ProductCard.css";
import { FaCartPlus } from "react-icons/fa";


function ProductCard(){
    return(
        <section className="ProductCard">

            <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="" className="CardImage"/>
            <div className="CardInfos">
                <h2 className="CardPrice">R$ 2000,00</h2>
                <h2 className="CardTitle">Playstation 5 </h2>
            </div>

            <button type="button" className="ButtonAddCart"><FaCartPlus/></button>

        </section>
    )
};

export default ProductCard; 