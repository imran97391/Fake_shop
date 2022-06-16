import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectedProduct } from "../redux/actions/productactions";
import { removeselectedProduct } from "../redux/reducers/productreducer";

export const ProductDetalis = () => {
    const product = useSelector((state)=>state.product);
    const { productId } = useParams();
    const dispatch = useDispatch()
    console.log(productId)

    const fetchSingleProduct = async () => {
        const singleProduct = await axios.get(`https://fakestoreapi.com/products/${productId}`).catch(err=>console.log(err));
        console.log(singleProduct);
        dispatch(selectedProduct(singleProduct.data))
    }
    console.log(product)
    useEffect(() => {
        fetchSingleProduct()
        return ()=>{dispatch(removeselectedProduct())}
    },[productId])
    const { image, title, price, category } = product;
    return (
        <div className="single-product">
            <div className="card" style={{padding:"20px"}}>
                <div className="image">
                    <img src={image} alt={title} />
                </div>
                <div className="content" style={{padding:"10px"}}>
                    <div className="header">{title}</div>
                    <div className="meta price">{ price}</div>
                    <div className="meta">{ category}</div>
                </div>
            </div>
        </div>
    )
}