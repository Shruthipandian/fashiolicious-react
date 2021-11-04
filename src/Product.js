import React from 'react';
import "./Product.css";
import StarIcon from '@material-ui/icons/Star';

function Product({title,image,price,rating}){
    return (
        <div className="product">
        <div className="product_info">
            <p>NEW ARRIVAL:ENTHIC GOWN</p>
            <p className="product_price">
                <small>RS</small>
                <strong>1500</strong>
            </p>
            <div className="product_rating">
            <StarIcon />
            <StarIcon />
            <StarIcon />

            </div>
           
        </div>
        <img src="product1.jpg"></img>
        <button>Add to cart</button>
            
        </div>
    );
}

export default Product
