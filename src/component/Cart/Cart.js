import React from 'react';
import './Cart.css'

const Cart = (props) => {
    console.log(props)
    const {name,age,about,img,Time}=props.cart
    return (
        <div className='carts'>
            <img src={img} alt="" />
           <div className='detail-section'>
           <h4>{name}</h4>
            <p>{about.slice(0,97)}...</p>
            <h5>For Age : {age}</h5>
            <h5>Time required : {Time}</h5>
           </div>
           <button className='btn-add'>Add to list</button>

        </div>
    );
};

export default Cart;