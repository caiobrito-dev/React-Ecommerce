import React, {useState, useEffect} from "react";
import fetchProducts from "../../api/fetchProducts";
import ProductCard from "../ProductCard/ProductCard";       
import "./Products.css"

function Products() {

    const [products, setProducts] = useState([]); 

    useEffect(() => {
        fetchProducts().then((response) => {
            setProducts(response);
        });
    }, []); 

    console.log(products); 

    return(
        <section className="Products TopContainer"> 
            {
                products.map((product) => <ProductCard key={product.id} data={product} />)
            }
        </section>
    )
}

export default Products; 