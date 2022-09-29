import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import Blog from '../Blog/Blog';
import Cart from '../Cart/Cart';

import './Carts.css'

const Carts = () => {
    const [carts, setCarts]=useState([]);
    const [item,setItems]=useState([]);
    const [breakTime,setBreakTime]=useState(0);
    

    useEffect(()=>{
        fetch('card.json')
        .then(res =>res.json())
        .then(data =>setCarts(data))
    },[]);

    const handalClick =(cart)=>{
        
        const newItem=[...item,cart];
        setItems(newItem)
    }

    const updateBreakTime=(time)=>{
        setBreakTime(time)
        localStorage.setItem('Data', JSON.stringify(time));

    }
   

    useEffect(() => {
        let localTime = JSON.parse(localStorage.getItem('Data'));
        if (localTime != null) {
          setBreakTime(localTime);
        }
      
      }, []);
    return (
      <div>
       
       <div className='header'>
       <h1>Boost Your Energy</h1>
        <h3>Select today’s exercise</h3>
       </div>
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
               <Activity item={item}
               updateBreakTime={updateBreakTime}
               breakTime={breakTime}
               

               ></Activity>
               
               
               
               
            </div>
            
        </div>
        <Blog></Blog>
      </div>
    );
};

export default Carts;