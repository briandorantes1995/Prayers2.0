import {Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import Registro from "./Components/Registro";
import Contactanos from "./Components/Contactanos/Contactanos";
import Home from "./Components/Home";
import React from "react";


function App() {
    return (
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/login' element={<Login/>} />
            <Route path="/registro" element={<Registro/>} />
            <Route path='/Contactanos' element={<Contactanos />} />
        </Routes>
    );
}

export default App;
