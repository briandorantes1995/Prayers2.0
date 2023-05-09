import React, { useState } from 'react'
import './CarritoCard.css'
import { Link, useLocation } from 'react-router-dom'
import {
    MDBRow,
    MDBContainer,
    MDBInput
} from 'mdb-react-ui-kit';
import { useCarritoContext, CarritoContext } from "../../Context/carritoContext";
import { useUserContext } from '../../Context/userContext';
function CarritoCard({ product }) {
    const { carrito, setCarrito } = useCarritoContext();
    const [cantidad, setCantidad] = useState(product.cantidad);

    function addToCart() {
        // articulo.cantidad = cantidad;
        // setCarrito([...carrito, articulo]);
    }


    function deleteFromCart() {
        const carritoActualizado = carrito.filter((producto) => {
            // console.log(producto.id != articulo.id)
            return producto.id != product.id
        })
        setCarrito(carritoActualizado);
        // console.log(carritoActualizado)
        console.log(product.id)
    }
    return (

        <div className="card mb-3 mx-2">
            <div className="img_container">
                <img
                    src={product?.images[0]}
                    alt={product?.name} />
            </div>
            <br />
            <div className="card_content">
                <h2 className="nft_name">{product?.name}</h2>
                <p className="nft_price">$ {(product?.price.unit_amount / 100) * cantidad} {product?.price.currency}</p>
            </div>
            <MDBContainer className='mt-3  text-white'>
                <MDBRow>
                    <h5 className='fw-bold text-start '>Cantidad: </h5>
                    <MDBInput id='typeNumber' type='number' className='text-white' min="1" value={cantidad} onChange={(event) => {
                        setCantidad(event.target.value);
                    }} />
                </MDBRow>


                <MDBBtn onClick={deleteFromCart} className="btn my-2 mb-0" typw="btn">
                    Delete
                </MDBBtn>
            </MDBContainer>
        </div>
    )
}
export default CarritoCard;
