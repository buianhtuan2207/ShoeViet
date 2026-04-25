import React from 'react';
import './ProductCard.css';

const ProductCard = ({ data }) => {
    return (
        <div className="product-card">
            <div className="product-img-wrapper">
                <img alt={data.name} src={data.img} className="product-img" />
            </div>
            <div className="product-info">
                <span className="product-category">{data.category}</span>
                <h3 className="product-title">{data.name}</h3>
                <span className="product-price">{data.price}</span>
            </div>
        </div>
    );
};

export default ProductCard;