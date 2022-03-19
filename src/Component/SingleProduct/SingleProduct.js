import React from 'react';
import Modal from '../Modal/Modal';
import './SingleProduct.css'

const SingleProduct = (props) => {
    const {title, image} = props.product;
    const {increseCart} = props;
    const {disCart} = props;
    return (
        <div className='col-md-4 brdr'>
            <div className="card p-3 mt-4 w-100 croo">
              <img className='w-50 m-auto' src={image} alt="" />
              <h2>{title.slice(0, 7)}</h2>
            </div>
            <div className='d-flex justify-content-around mt-4'>
                <button onClick={increseCart} className='btn btn-light'>ADD</button>
                <button onClick={disCart} className='btn btn-light'>DELETE</button>
                <Modal product={props.product} increseCart={props.increseCart}></Modal>
            </div>
        </div>
        
    );
};

export default SingleProduct;