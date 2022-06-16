import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";



///https://fakestoreapi.com/products
export const ProductComponent = () => {
    const products = useSelector((state) => state.allProducts.products);
    //console.log(products)
    const renderlist = products.map((product) => {
        const { id, title, image,price,category } = product;
        return (<div className="myproduct" key={id} >
            <Link to={`/product/${id}`}>
            <div className="card" style={{padding:"20px"}}>
                <div className="image">
                    <img src={image} alt={title} style={ {width:"100%", height:"255px"}}/>
                </div>
                <div className="content" style={{padding:"10px"}}>
                    <div className="header">{title}</div>
                    <div className="meta price">{ price}</div>
                    <div className="meta">{ category}</div>
                </div>
            </div>
            </Link>
            </div>)
    })
    return (
        <div className="main-content" style={{display: "grid","grid-template-columns": "20% 20% 20% 20%",  padding: "10px" ,gap:"2%"}}>
            <>{renderlist}</>
        </div>
    )
}