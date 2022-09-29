import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import Cart from '../Cart/Cart';
import './Carts.css'

const Carts = () => {
    const [carts, setCarts]=useState([]);
    useEffect(()=>{
        fetch('card.json')
        .then(res =>res.json())
        .then(data =>setCarts(data))
    },[])
    return (
        <div className='main-container'>
            <div className="items-container">
                {
                    carts.map(cart =><Cart 
                        key={cart.id}
                        cart={cart}
                    
                    ></Cart>)
                }
            </div>
            <div className="carts-container">
               <Activity></Activity>
            </div>
        </div>
    );
};

export default Carts;