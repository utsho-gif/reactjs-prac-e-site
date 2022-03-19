import React, { useEffect, useState } from 'react';
import SingleProduct from '../SingleProduct/SingleProduct';

const AllProducts = (props) => {
    const [products, setProducts] = useState([])
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <div className="row container mx-auto">
            <h2 className='mt-5'>Avilable Products Are {products.length} </h2>
            {
                products.map(product => console.log(product))
            }
            {
                products.map(product => <SingleProduct product={product} key={product.id} increseCart = {props.increseCart} disCart = {props.disCart}></SingleProduct>)
            }
        </div>
    );
};

export default AllProducts;