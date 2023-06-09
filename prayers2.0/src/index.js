import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { UserContextProvider } from "./Context/userContext";
import { CarritoContextProvider } from "./Context/carritoContext";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <UserContextProvider>
        <CarritoContextProvider>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
        </CarritoContextProvider>
    </UserContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
