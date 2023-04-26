import React from 'react'
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import CarritoComponent from "./CarritoComponent";


function Carrito(){
    return(
    <div>
        <Header></Header>
        <CarritoComponent></CarritoComponent>
        <Footer></Footer>
    </div>
    );
}

export default Carrito;