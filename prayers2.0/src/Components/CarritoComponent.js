import React from 'react'
import {useCarritoContext} from "../Context/carritoContext";
import Card from "./UI/Card";

function CarritoComponent(){
    const { carrito } = useCarritoContext();
    console.log(carrito);
    return(
        <div>
            {carrito?.map((producto) =>(
                <Card product={producto} />
                )
            )}
        </div>
    );
}

export default CarritoComponent;