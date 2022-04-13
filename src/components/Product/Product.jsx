import React from 'react';

const Product = ({product , handleAddToCart}) => {
    const { name , price } = product;
    return (
        <div>
            <div>{name}</div>
            <div>{price}</div>
            <div><button onClick={()=>handleAddToCart(product)}>Add to Cart</button></div>
        </div>
    );
};

export default Product;