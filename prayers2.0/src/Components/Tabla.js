import React, {useEffect, useState} from 'react'
import getActiveProducts from "../Functions/getActiveProducts";
import './Tabla.css'
const Tabla = () => {
    const [productos, setProductos] = useState(null)

    useEffect(() => {
        async function getProducts() {
            const products = await getActiveProducts();
            setProductos(products);
        }
        getProducts()

    }, []);

    function getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
    }
    return (
        <div className="Productos">
            <table className="customers">
                <tr><td>Nombre</td><td>Precio</td><td>Descripcion</td><td>Stock</td></tr>
            {productos ?
                productos.map((p) => (
                    <tr><td>{p?.name}</td><td>${p?.price.unit_amount / 100}{p?.price.currency}</td><td>{p?.description}</td><td>{Math.round(getRandomArbitrary(2,15))}</td></tr>
                ))
                : null}
                </table>
        </div>
    )
}
export default Tabla;