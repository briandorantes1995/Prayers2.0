import React, { useState } from 'react';
import {useUserContext} from "../../Context/userContext";
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBNavbarNav,
    MDBNavbarLink,
    MDBIcon,
    MDBCollapse, MDBDropdownItem, MDBDropdownMenu, MDBDropdownToggle, MDBDropdown
} from 'mdb-react-ui-kit';
import "./Header.css"
import "../../index.css"
import cerrarSesion from "../../Functions/cerrarSesion";
export default function Header() {
    const [showNavSecond, setShowNavSecond] = useState(false);
    const {user} = useUserContext();
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
                            ?<MDBDropdown>
                        <MDBDropdownToggle tag='a' className="yellow-text" role='button'>
                            <MDBNavbarLink className="yellow-text">{user.email}</MDBNavbarLink>
                        </MDBDropdownToggle>
                        <MDBDropdownMenu>
                            <MDBDropdownItem link>Perfil</MDBDropdownItem>
                            <MDBDropdownItem link onClick={cerrarSesion}>Cerrar Sesion</MDBDropdownItem>
                            <MDBDropdownItem link href="/Reportes">Reportes</MDBDropdownItem>
                        </MDBDropdownMenu>
                    </MDBDropdown>
                        : <MDBNavbarLink href="/registro" className="justify-content-end yellow-text">
                            Registrate
                        </MDBNavbarLink>}

                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBContainer>
        </MDBNavbar>
    );
}
