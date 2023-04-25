import React, { useState } from 'react';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBIcon,
    MDBCollapse
} from 'mdb-react-ui-kit';
import { NavLink, Link } from 'react-router-dom';
import "./Header.css"
import "../../index.css"

export default function Header() {
    const [showNavSecond, setShowNavSecond] = useState(false);

    //Modificar esta linea cuando se haga la conexion a la db
    let getUser = JSON.parse(localStorage.getItem('user-info'))

    return (
        <MDBNavbar expand='lg' className='blue mb-0 yellow-text py-3 px-2 h5 '>
            <MDBContainer fluid >
                <MDBNavbarBrand href='#' className=' yellow-text title-size'>Prayers</MDBNavbarBrand>

                <MDBNavbarToggler
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                    onClick={() => setShowNavSecond(!showNavSecond)}
                >
                    <MDBIcon icon='bars' fas />
                </MDBNavbarToggler>
                <MDBCollapse navbar show={showNavSecond}>
                    <MDBNavbarNav className='justify-content-start  '>

                        <MDBNavbarLink >

                            <NavLink className='align-self-center text-decoration-none text-reset yellow-text' to="/">Inicio</NavLink>
                        </MDBNavbarLink>
                        <MDBNavbarLink>
                            <NavLink className='align-self-center text-decoration-none text-reset yellow-text' to="/Carrito">Carrito</NavLink>
                        </MDBNavbarLink>
                        {/* <MDBNavbarLink>
                            <NavLink className='align-self-center text-decoration-none text-reset' to="/">Inicio</NavLink>
                        </MDBNavbarLink> */}


                    </MDBNavbarNav>
                    <MDBNavbarNav className='justify-content-end '>

                        {getUser
                            ? <MDBNavbarLink className="yellow-text">{getUser.nombre}</MDBNavbarLink>
                            : <MDBNavbarLink href="registro" className="justify-content-end yellow-text"><NavLink className='align-self-center text-decoration-none text-reset yellow-text' to="/Registro">Registrate</NavLink></MDBNavbarLink>}



                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBContainer>
        </MDBNavbar>
    );
}
