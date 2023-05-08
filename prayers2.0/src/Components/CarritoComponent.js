import React from 'react'
import { useCarritoContext, emailCarritoItems } from "../Context/carritoContext";
import Card from "./UI/Card";
import "./UI/Individual.css"
import "./Carrito.css"

function CarritoComponent() {
    const { carrito, setCarrito } = useCarritoContext();
    //crear una funcion donde revise si el usuario esta registrado o no
    //IF lo esta entonces le puede dar a comprar
    //ELSE si no lo esta le aparece un pop up donde le pide registrarse
    return (
        <section className="carrito">
            {carrito?.map((producto) => (
                <Card product={producto} />
            )
            )}
            <button className="compra-button" onClick={() => emailCarritoItems(setCarrito)} >Comprar</button>
        </section >
    );
}

export default CarritoComponent;
