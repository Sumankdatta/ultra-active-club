import React from 'react';
import './Activity.css'


const Activity = () => {
    return (
        <div className='activity-information'>
           <div className='persone'>
                <h4>Anurag Datta</h4>
                <p>Newyork.USA</p>
           </div>
           <div className='persone-information'>
            <div className='second-container'>
             <div className='weight-items'>
           <div className='d-flex'>
                 <h2>65</h2>
                <small>kg</small>
           </div>
                <p>Weight</p>
           </div>
           <div className='weight-items'>
           <div className='d-flex'>
                 <h2>6.5</h2>
                <small></small>
           </div>
                <p>Height</p>
           </div>
           <div className='weight-items'>
           <div className='d-flex'>
                 <h2>30</h2>
            <small>yrs</small>
           </div>
           <p>Age</p>
           </div>

           </div>

           </div>

           <h4 className='add-break'>Add A Break</h4>
           <div className='secound-count'>
            <div className='second'>
                <button className='btn-second'>10</button>
                <button className='btn-second'>20</button>
                <button className='btn-second'>30</button>
                <button className='btn-second'>40</button>
                <button className='btn-second'>50</button>
                
            </div>
            <h4 className='add-break'>Exercise Details</h4>
            <div className='exercise-time'>
                <p className='padding'>Exercise time :</p>

            </div>
            <div className='exercise-time'>
                <p className='padding'>Break time :</p>

            </div>
            <button className='btn-activity'>Activity Completed</button>

           </div>
           

        </div>
    );
};

export default Activity;