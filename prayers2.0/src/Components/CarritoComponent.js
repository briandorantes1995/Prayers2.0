import React from 'react'
import { useCarritoContext, emailCarritoItems } from "../Context/carritoContext";
import {useUserContext} from "../Context/userContext";
import CarritoCard from './CarritoCard/CarritoCard';
import "./UI/Individual.css"
import "./Carrito.css"
import axios from 'axios';


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
        <div>
        <section className="carrito mt-2">
<<<<<<< HEAD
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
=======
        {carrito?.map((producto) => (
        <CarritoCard product={producto} />
                        )
                )}
                <button className="compra-button" onClick={isUser}>Comprar</button>
            </section>
        </div>
>>>>>>> 62217df82d91aa01d75eb588966ba61506923a9e
    );
}

export default CarritoComponent;
