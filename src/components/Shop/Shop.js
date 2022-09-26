import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import { AddToLs, GetLocalStorage } from '../Fake db/AddLs';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [carts, setCarts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    useEffect(() => {
        const GetLocalStorageItems = GetLocalStorage();
        let lsProducts = [];
        for (const id in GetLocalStorageItems) {
            const addedProduct = products.find(product => product.id === id)
            if (addedProduct) {
                addedProduct.quantitiy = GetLocalStorageItems[id];
                lsProducts.push(addedProduct)
            }

        }
        setCarts(lsProducts);
    }, [products])

    const clickHandler = (product) => {
        const newCart = [...carts, product]
        setCarts(newCart)
        AddToLs(product.id)
    }
    return (
        <div className='shop-container'>
            <div className='products-container'>
                {
                    products.map(product => <Product clickHandler={clickHandler} key={product.id} product={product}></Product>)
                }
            </div>
            <div className="order-container">

                <Cart cart={carts}></Cart>
            </div>
        </div>
    );
};

export default Shop;