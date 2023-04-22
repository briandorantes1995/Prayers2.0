import React from 'react'
import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom'
import Contactanos from "../Components/Contactanos/Contactanos.js"
import Header from '../Components/Header/Header.js'
import Registro from "../Components/Registro.js"
import Login from "../Components/Login.js"

export const AppRoutes = () => {
    return (
        <HashRouter hashType="slash">

            <Header />

            <Routes>
                <Route path='/' element={<Login />} />
                <Route exact path="/registro" element={<Registro />} />
                <Route path='/Contactanos' element={<Contactanos />} />

            </Routes>

        </HashRouter>
    )
}
