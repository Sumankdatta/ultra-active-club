import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import Cart from '../Cart/Cart';
import Toast from '../Toast/Toast';
import './Carts.css'

const Carts = () => {
    const [carts, setCarts]=useState([]);
    const [item,setItems]=useState([]);
    const [breakTime,setBreakTime]=useState(0);
    const [toast,setToast]=useState(false)

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

    const updateBreakTime=(time)=>{
        setBreakTime(time)
        localStorage.setItem('Data', JSON.stringify(time));

    }
    const showToast=()=>{
        setToast(true)

    }

    useEffect(() => {
        let localTime = JSON.parse(localStorage.getItem('Data'));
        if (localTime != null) {
          setBreakTime(localTime);
        }
      
      }, [])
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
               showToast={showToast}

               ></Activity>
               {/* {toast?<Toast></Toast>:''} */}
               
               
               
            </div>
            
        </div>
      </div>
    );
};

export default Carts;