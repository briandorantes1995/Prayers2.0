import React, { useState, useContext, createContext, useEffect } from "react"

export const CarritoContext = createContext();

export const CarritoContextProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([]);
    useEffect(() => {
        const cartItemsData = JSON.parse(localStorage.getItem('carritoItems'))

        if (cartItemsData) {
            setCarrito(cartItemsData)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('carritoItems', JSON.stringify(carrito))
    }, [carrito])

    // function addToCart(newItem) {
    //     setCarrito(prevItems => [...prevItems, newItem])
    // }

    // function removeFromCart(id) {
    //     setCarrito(prevItems => prevItems.filter(item => item.id !== id))
    // }
    return (
        <CarritoContext.Provider value={{ carrito, setCarrito }}>
            {children}
        </CarritoContext.Provider>
    );
}

export const useCarritoContext = () => {
    const context = useContext(CarritoContext);
    if (!context) throw new Error("useCarritoContext must be used within a UserContextProvider");
    return context;

}

export const deleteCarritoItems = (setCarrito) => {
    setCarrito([]);
}


