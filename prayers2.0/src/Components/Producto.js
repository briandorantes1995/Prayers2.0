import React,{useState,useEffect} from 'react'
import {useParams} from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import getProductByID from "../Functions/getProductByID";
import Individual from "./UI/Individual";
function Producto(){
    const { id }=useParams();
    const [productInfo,setProductInfo] = useState(null);
    useEffect(()=>{
        async function getProductInfo(){
            const productInfo =  await getProductByID(id);
            setProductInfo(productInfo);
        }
getProductInfo();
    },[id]);
    return(
        <div>
            <Header></Header>
            <Individual articulo={productInfo}></Individual>
            <Footer></Footer>
        </div>
    )
}

export default Producto