import React from 'react'
import { useCarritoContext, deleteCarritoItems } from "../Context/carritoContext";
import { useUserContext } from "../Context/userContext";
import CarritoCard from './CarritoCard/CarritoCard';
import "./UI/Individual.css"
import "./Carrito.css"
import axios from 'axios';


function CarritoComponent() {
    const { carrito, setCarrito } = useCarritoContext();
    const { user } = useUserContext();
    const total = carrito.reduce((total, producto) => {
        return total + ((producto?.price.unit_amount / 100) * producto.cantidad)
    }, 0)

    const text = carrito.map((producto) => {
        return "Playera " + producto.name + ": " + ((producto?.price.unit_amount / 100) * producto.cantidad) + "<br>"
    })
    console.log(carrito)
    console.log(text.join(' '))

    //const email = user.email
    function isUser() {
        if (user) {
            sendEmail()
            deleteCarritoItems(setCarrito)
            alert("Su producto ha sido comprado con exito, se le enviara un correo")

        } else {
            alert("Tiene que registrarse para poder comprar")
        }
    }

    function carritoExists() {
        return carrito.length == 0
    }

    function sendEmail() {
        const api = "https://js5fjxrksdee3wvxghqvtmvprq0pwdog.lambda-url.us-east-1.on.aws?email=" + user.email + "&productosInfo=" + text + "&total=" + total;
        const data = JSON.stringify({ carrito: carrito, email: user.email, total: total })

        axios
            .post(api
            )
            .then((response) => {
                console.log("response", response);
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
