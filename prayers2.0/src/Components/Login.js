import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth,signInWithGoogle } from '../firebaseConfig';
import { useAuthState } from "react-firebase-hooks/auth";
import './Registro.css';
import loginEmail from "../Functions/loginEmail";
function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();
    useEffect(() => {
    }, [navigate, user, loading]);
    async function login() {
        const cuenta = await loginEmail(email, password);
        console.log(cuenta);
    }
    return (
        <div className="align">
            <div className="grid align__item">
                <div className="register">
                    <svg className="site__logo" width="200px" height="200px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 9.47256V6.26286C4 5.92383 4.21369 5.62162 4.53332 5.50861L7.73332 4.3772C8.25389 4.19314 8.80587 4.5903 8.9971 5.10828C9.44791 6.32939 10.6223 7.20005 12 7.20005C13.3777 7.20005 14.5521 6.3294 15.0029 5.10828C15.1941 4.5903 15.7461 4.19314 16.2667 4.3772L19.4667 5.50861C19.7863 5.62163 20 5.92383 20 6.26286V9.47256C20 9.99301 19.5109 10.3749 19.006 10.2487L17.794 9.94569C17.2891 9.81946 16.8 10.2013 16.8 10.7218V19.2972C16.8 19.739 16.4418 20.0972 16 20.0972H8C7.55817 20.0972 7.2 19.739 7.2 19.2972V10.7218C7.2 10.2013 6.71089 9.81946 6.20597 9.94569L4.99403 10.2487C4.48911 10.3749 4 9.99302 4 9.47256Z" stroke="#4f7a28" stroke-width="0.8"></path> </g></svg>
                    <h2>Iniciar Sesion</h2>
                    <div className="form">
                        <div className="form__field">
                            <label>Usuario:</label>
                            <input type="email" value={email} placeholder="info@mailaddress.com" onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="form__field">
                            <label>Contraseña: </label>
                            <input type="password" value={password} placeholder="••••••••••••" onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <button className="btn-primary" onClick={login} >Iniciar Sesion </button>
                        <button className="btn-primary" onClick={signInWithGoogle}>Inicia Sesion con Google</button>
                    </div>
                    No tienes Cuenta? <Link to="/registro">Registrate</Link>
                </div>
            </div>
        </div>

    )
}
export default Login
