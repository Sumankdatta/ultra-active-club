import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import Cart from '../Cart/Cart';
import './Carts.css'

const Carts = () => {
    const [carts, setCarts]=useState([]);
    const [item,setItems]=useState([])
    useEffect(()=>{
        fetch('card.json')
        .then(res =>res.json())
        .then(data =>setCarts(data))
    },[])

    const handalClick =(cart)=>{
        console.log(cart)
        const newItem=[...item,cart];
        setItems(newItem)
    }
    return (
        <div className='main-container'>
            <div className="items-container">
                {
                    carts.map(cart =><Cart 
                        key={cart.id}
                        cart={cart}
                        handalClick={handalClick}
                    
                    ></Cart>)
                }
            </div>
            <div className="carts-container">
               <Activity item={item}></Activity>
               
            </div>
        </div>
    );
};

export default Carts;