import React from 'react';
import './Cart.css'

const Cart = (props) => {
    console.log(props)
    const {handalClick,cart}=props;
    const {name,age,about,img,Time}=cart;
    
    console.log(props)
    return (
        <div className='carts'>
            <img src={img} alt="" />
           <div className='detail-section'>
           <h4>{name}</h4>
            <p>{about.slice(0,97)}...</p>
            <h5>For Age : {age}</h5>
            <h5>Time required : {Time}s</h5>
           </div>
           <button className='btn-add' onClick={()=>handalClick(cart)}>Add to list</button>

        </div>
    );
};

export default Cart;