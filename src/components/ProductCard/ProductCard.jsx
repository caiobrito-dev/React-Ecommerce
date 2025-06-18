import React from "react";
import "./ProductCard.css";
import { FaCartPlus } from "react-icons/fa";
import formatCurrency from "../../utils/formatCurrency"


function ProductCard({ data }){

    const { price, title, image } = data;

    return(
        <section className="ProductCard">

            <img src={image} alt="" className="CardImage"/>
            <div className="CardInfos">
                <h2 className="CardPrice">{formatCurrency(price, "BRL")}
                </h2>
                <h2 className="CardTitle">{title}</h2>
            </div>

            <button type="button" className="ButtonAddCart"><FaCartPlus/></button>

        </section>
    )
};

export default ProductCard; 