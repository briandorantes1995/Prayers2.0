import React, {useEffect, useState} from 'react'
import getActiveProducts from "../Functions/getActiveProducts";
import Card from "./UI/Card";
import './Productos.css'

function Productos(){
    const [productos,setProductos] = useState(null)

    useEffect(()=>{
    async function getProducts(){
        const products = await getActiveProducts();
        setProductos(products);
    }
    getProducts()

    },[]);


    return(
        <div className="Productos">
            {productos?
                productos.map((p)=>(
                <div className="Producto" key={p.id}>
                    <Card product={p}/>
                </div>
                ))
            :null}
        </div>
    )

}//fin funcion Productos

export default  Productos