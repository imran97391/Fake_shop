import React, { useEffect } from "react";
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import { ProductComponent } from "./productComponent";
import { setProducts } from "../redux/actions/productactions";


export const Productlisting = () => {
    const products = useSelector((state) => state)
    const dispatch = useDispatch();

    const featchproduct = async () => {
        const response = await axios.get("https://fakestoreapi.com/products").catch(err => console.log(err));
        dispatch(setProducts(response.data))
    }
    //console.log("products",products)

    useEffect(() => {
        featchproduct();
    },[])
    //console.log(products)
    return (
        <div className="products" style={{display:"flex"}}>
            <ProductComponent/>
        </div>
    )
}