import React from 'react'
import { useCarritoContext, emailCarritoItems } from "../Context/carritoContext";
import CarritoCard from './CarritoCard/CarritoCard';
import "./UI/Individual.css"
import "./Carrito.css"
import axios from 'axios';


function CarritoComponent() {
    const { carrito, setCarrito } = useCarritoContext();

    function isUser() {
        //crear una funcion donde revise si el usuario esta registrado o no
        //modificar esta linea
        return true
    }

    function carritoExists() {
        return carrito.length == 0
    }

    function sendEmail() {
        const api = "";

        axios
            .post(api,
            )
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
    }
    return (
        <section className="carrito mt-2">
            {carrito?.map((producto) => (
                <CarritoCard product={producto} />
            )
            )}
            <button className="compra-button" onClick={() => {
                if (carritoExists()) {
                    if (isUser()) {
                        emailCarritoItems(setCarrito)
                        alert("Su producto ha sido comprado con exito")
                        sendEmail()
                    } else {
                        alert("Tiene que registrarse para poder comprar")
                    }
                } else {
                    alert("El carrito no tiene productos")
                }

            }} >Comprar</button>
        </section >
    );
}

export default CarritoComponent;
