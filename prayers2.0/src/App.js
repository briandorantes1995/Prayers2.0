import React from "react";
import "./index.css"
import { Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import Registro from "./Components/Registro";
import Contactanos from "./Components/Contactanos/Contactanos";
import Home from "./Components/Home";
import Articulos from "./Components/Articulos";
import Producto from "./Components/Producto";

function App() {
    return (

        <Routes >
            <Route  path='/' element={<Home/>}/>
            <Route  path='/producto/:id' element={<Producto/>}/>
            <Route  path='/articulos' element={<Articulos/>}/>
            <Route path='/login' element={<Login />} />
            <Route path="/registro" element={<Registro/>} />
            <Route path='/Contactanos' element={<Contactanos />} />
        </Routes>
    );
}

export default App;
