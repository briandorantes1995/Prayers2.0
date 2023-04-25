import React from "react";
import "./index.css"
import { Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import Registro from "./Components/Registro";
import Contactanos from "./Components/Contactanos/Contactanos";
import Home from "./Components/Home";
import Articulos from "./Components/Articulos";

function App() {
    return (

        <Routes >
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/articulos' element={<Articulos/>}/>
            <Route path='/login' element={<Login />} />
            <Route path="/registro" element={<Registro />} />
            <Route path='/Contactanos' element={<Contactanos />} />
        </Routes>
    );
}

export default App;
