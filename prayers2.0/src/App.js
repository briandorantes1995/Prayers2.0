import React from "react";
import "./index.css"
import { Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import Registro from "./Components/Registro";
import Contactanos from "./Components/Contactanos/Contactanos";
import Home from "./Components/Home";
import Articulos from "./Components/Articulos";
import Producto from "./Components/Producto";
import Carrito from "./Components/Carrito";
import Reportes from "./Components/Reportes";
import { auth } from "./firebaseConfig";
import { useUserContext } from "./Context/userContext";
import { onAuthStateChanged } from "firebase/auth";

function App() {
    const { user, setUser } = useUserContext();
    onAuthStateChanged(auth, (firebaseUser) => {
        if (firebaseUser) setUser(firebaseUser);
        if (!firebaseUser) setUser(null);
    });
    return (
        <Routes >
            <Route path='/' element={<Home/>}/>
            <Route path='/producto/:id' element={<Producto/>}/>
            <Route path='/carrito' element={<Carrito />}/>
            <Route path='/articulos' element={<Articulos/>}/>
            <Route path='/login' element={<Login />}/>
            <Route path="/registro" element={<Registro />}/>
            <Route path='/Contactanos' element={<Contactanos />}/>
            <Route path='/Reportes' element={<Reportes/>}/>
        </Routes>
    );
}

export default App;
