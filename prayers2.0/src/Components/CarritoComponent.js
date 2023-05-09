import React from 'react'
import { useCarritoContext, emailCarritoItems } from "../Context/carritoContext";
import { useUserContext } from "../Context/userContext";
import CarritoCard from './CarritoCard/CarritoCard';
import "./UI/Individual.css"
import "./Carrito.css"
import axios from 'axios';


function CarritoComponent() {
    const { carrito, setCarrito } = useCarritoContext();
    const { user } = useUserContext();

    //const email = user.email
    function isUser() {
        if (user) {
            emailCarritoItems(setCarrito)
            alert("Su producto ha sido comprado con exito")
            sendEmail()
        } else {
            alert("Tiene que registrarse para poder comprar")
        }
    }

    function carritoExists() {
        return carrito.length == 0
    }

    function sendEmail() {
        const api = "https://js5fjxrksdee3wvxghqvtmvprq0pwdog.lambda-url.us-east-1.on.aws?email=" + user.email;

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
