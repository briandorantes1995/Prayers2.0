import React from 'react'
import './Card.css'
function Card({product}){
return(
<div className="card">
    <div className="img_container">
    <img
        src={product.images[0]}
        alt={product.name}/>
    </div>
    <br/>
    <div className="card_content">
        <h2 className="nft_name">{product.name}</h2>
    <p className="nft_price">{product.price.unit_amount/100}{product.price.currency}</p>
</div>
    <div className="addtocart_container">
<button className="btn_addtocart">Add To Cart </button>
</div>
</div>
)
}
export default Card;