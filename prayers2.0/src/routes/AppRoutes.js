import React from 'react'
import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom'
import Contactanos from "./Contactanos/Contactanos.js"
export const AppRoutes = () => {
    return (
        <HashRouter hashType="slash">

            <Header />

            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/Contactanos' element={<Contact />} />

                <Route path='*' element={<Error />} />
            </Routes>

            <Footer />
        </HashRouter>
    )
}
