import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import { addToDb, getStoredCart } from '../Utility/FakeDB';

const Shop = () => {
    const [products , setProducts] = useState([]);
    const [cart ,setCart] = useState([]);
    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data));
    },[]);

    useEffect(()=> {
        const storedCart = getStoredCart();
        for(const id in storedCart){
            const addedProduct = products.find(product => product.id === id);
            console.log(addedProduct);
        }
    },[])

    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.id)
    }
  
    return (
        <div>
            <Cart cart={cart}></Cart>
            <div className="product-container">
                <div>This is for product</div>
                <div>
                    {
                        products.map((product) => <Product key={product.id} product={product} handleAddToCart={handleAddToCart}></Product>)
                    }
                </div>
            </div>
            <div className="cart-container"></div>
        </div>
    );
};

export default Shop;