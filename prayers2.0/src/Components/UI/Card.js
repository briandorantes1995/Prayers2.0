import React from 'react'
import './Card.css'
import {Link} from 'react-router-dom'

function Card({ product }) {
    return (
        <Link to={`/producto/${product.id}`}>
        <div className="card mb-3 mx-2">
            <div className="img_container">
                <img
                    src={product.images[0]}
                    alt={product.name} />
            </div>
            <br />
            <div className="card_content">
                <h2 className="nft_name">{product.name}</h2>
                <p className="nft_price">{product.price.unit_amount / 100}{product.price.currency}</p>
            </div>
            <div className="addtocart_container">
                <button className="btn_addtocart">Add To Cart </button>
            </div>
        </div>
            </Link>
    )
}
export default Card;
