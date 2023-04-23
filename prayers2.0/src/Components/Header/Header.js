import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./Header.css"

export const Header = () => {

    let getUser = JSON.parse(localStorage.getItem('user-info'))


    return (
        <Navbar className='yellow' expand="lg" >
            <Container>
                <Navbar.Brand href="#home">Prayers Mx</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link to='/' href="#gfg">Inicio</Nav.Link>
                        <Nav.Link href="#Favoritos">Favoritos</Nav.Link>
                        <Nav.Link href="#Favoritos">Carrito</Nav.Link>
                    </Nav>
                    <Navbar.Collapse className="justify-content-end">
                        {getUser
                            ? <Nav.Link className="justify-content-end">{getUser.nombre}</Nav.Link>
                            : <Nav.Link href="registro" className="justify-content-end">Registrate</Nav.Link>}
                    </Navbar.Collapse>
                </Navbar.Collapse>
            </Container>
        </Navbar >

    )


}
export default Header
