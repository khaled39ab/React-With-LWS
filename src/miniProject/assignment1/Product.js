import React from 'react';
import './style1.css'

const Product = ({product}) => {
    const {title, price, image, description, rating} = product;

    return (
        <article className="product">
            <img src={image} alt="" />
            <div className="product__details">
                <h4 className="product__title">{title}</h4>
                <p className='product__price'>Price: ${price}</p>
                <p className='product__rating'>Rating:{ rating.rate}/5</p>
                <p className="product__desc">Description: {description}</p>
                <button className="product__btn btn">Add to cart</button>
            </div>
        </article>
    );
};

export default Product;