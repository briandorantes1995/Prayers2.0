import React from 'react'
import { useCarritoContext, emailCarritoItems } from "../Context/carritoContext";
import {useUserContext} from "../Context/userContext";
import CarritoCard from './CarritoCard/CarritoCard';
import "./UI/Individual.css"
import "./Carrito.css"

function CarritoComponent() {
    const { carrito, setCarrito } = useCarritoContext();
    const {user} = useUserContext();
    function isUser() {
        if(user) {
            emailCarritoItems(setCarrito)
            alert("Su producto ha sido comprado con exito")
        }else {
            alert("Tiene que registrarse para poder comprar")
        }
    }

    return (
        <div>
        <section className="carrito mt-2">
        {carrito?.map((producto) => (
        <CarritoCard product={producto} />
                        )
                )}
                <button className="compra-button" onClick={isUser}>Comprar</button>
            </section>
        </div>
    );
}

export default CarritoComponent;
