import React, {useState, useEffect, useContext} from "react";
import fetchProducts from "../../api/fetchProducts";
import ProductCard from "../ProductCard/ProductCard";       
import "./Products.css"
import Loading from "../Loading/Loading";
import AppContext from "../../context/AppContext";


function Products() {

    const {products, setProducts} = useContext(AppContext)
     const [loading, setLoading] = useState(true) 
 
    useEffect(() => {
        fetchProducts().then((response) => {
            setProducts(response);
            setLoading(false); 
        });
    }, []); 

    console.log(products); 

    return(
        (loading && <Loading/>) || (
            <section className="Products TopContainer"> 
                {
                    products.map((product) => <ProductCard key={product.id} data={product} />)
                }
            </section>
        )  
    )
}

export default Products; 