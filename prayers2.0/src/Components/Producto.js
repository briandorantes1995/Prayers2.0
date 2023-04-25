import React,{useState,useEffect} from 'react'
import {useParams} from "react-router-dom";
import getProductByID from "../Functions/getProductByID";
function Producto(){
    const { id }=useParams();
    const [productInfo,setProductInfo] = useState(null);
    useEffect(()=>{
        async function getProductInfo(){
            const product =  await getProductByID(id);
            setProductInfo(product);
        }
getProductInfo();
    },[id]);
    return(
        <p>Producto:{productInfo?.name}</p>
    )
}

export default Producto