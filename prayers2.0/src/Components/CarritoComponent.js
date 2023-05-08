import React from 'react'
import { useCarritoContext, emailCarritoItems } from "../Context/carritoContext";
import CarritoCard from './CarritoCard/CarritoCard';
import "./UI/Individual.css"
import "./Carrito.css"

function CarritoComponent() {
    const { carrito, setCarrito } = useCarritoContext();
    function isUser() {
        //crear una funcion donde revise si el usuario esta registrado o no
        //modificar esta linea
        return true
    }

    return (
        <section className="carrito mt-2">
            {carrito?.map((producto) => (
                <CarritoCard product={producto} />
            )
            )}
            <button className="compra-button" onClick={() => {
                if (isUser()) {
                    emailCarritoItems(setCarrito)
                    alert("Su producto ha sido comprado con exito")
                } else {
                    alert("Tiene que registrarse para poder comprar")
                }
            }} >Comprar</button>
        </section >
    );
}

export default CarritoComponent;
