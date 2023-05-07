import React from 'react'
import {useCarritoContext} from "../Context/carritoContext";
import Card from "./UI/Card";
import "./UI/Individual.css"
import "./Carrito.css"

function CarritoComponent(){
    const { carrito } = useCarritoContext();
    return(
        <section className="carrito">
            {carrito?.map((producto) =>(
                <Card product={producto} />
                )
            )}
            <button className="compra-button">Comprar</button>
        </section>
    );
}

export default CarritoComponent;