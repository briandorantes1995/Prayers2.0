import React, { useState } from 'react';
import { getAuth } from "firebase/auth";
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBNavbarNav,
    MDBNavbarLink,
    MDBIcon,
    MDBCollapse
} from 'mdb-react-ui-kit';
import "./Header.css"
import "../../index.css"
const auth = getAuth();
const user = auth.currentUser;
export default function Header() {
    const [showNavSecond, setShowNavSecond] = useState(false);

    return (
        <MDBNavbar expand='lg' className='blue mb-0 yellow-text py-3 px-2 h5'>
            <MDBContainer fluid >
                <MDBNavbarBrand href='#' className=' yellow-text'>Prayers</MDBNavbarBrand>

                <MDBNavbarToggler
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                    onClick={() => setShowNavSecond(!showNavSecond)}
                >
                    <MDBIcon icon='bars' fas />
                </MDBNavbarToggler>
                <MDBCollapse navbar show={showNavSecond}>
                    <MDBNavbarNav className='justify-content-start'>
                        <MDBNavbarLink className="yellow-text" href="/">Inicio</MDBNavbarLink>
                        <MDBNavbarLink className="yellow-text" href="/articulos">Articulos</MDBNavbarLink>
                        <MDBNavbarLink className="yellow-text" href="/carrito">Carrito</MDBNavbarLink>
                    </MDBNavbarNav>

                    <MDBNavbarNav className='justify-content-end '>
                        {user
                            ? <MDBNavbarLink className="yellow-text">{user.email}</MDBNavbarLink>
                            : <MDBNavbarLink href="/registro" className="justify-content-end yellow-text">
                                Registrate
                            </MDBNavbarLink>}

                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBContainer>
        </MDBNavbar>
    );
}
