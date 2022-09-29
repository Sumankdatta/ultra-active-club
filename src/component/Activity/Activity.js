
import './Activity.css'
import profileIcon from '../../man.jfif';


const Activity = (props) => {
    
    const {item,breakTime,updateBreakTime,showToast}=props;
    let total=0;
    for(const cart of item){
        total=total + cart.Time;
        console.log(total)
    }
    
        
    

    return (
        <div className='activity-information'>
            <div className='persone-pic'>
            <img src={profileIcon} alt="" />
           <div className='persone'>
                <h4>Anurag Datta</h4>
                <p>Newyork.USA</p>
           </div>
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
                <button className='btn-second' onClick={()=>updateBreakTime(10)}>10s</button>
                <button className='btn-second' onClick={()=>updateBreakTime(20)}>20s</button>
                <button className='btn-second'onClick={()=>updateBreakTime(30)}>30s</button>
                <button className='btn-second'onClick={()=>updateBreakTime(40)}>40s</button>
                <button className='btn-second'onClick={()=>updateBreakTime(50)}>50s</button>
                
            </div>
            <h4 className='add-break'>Exercise Details</h4>
            {/* <p>ore:{item.length}</p> */}
            <div className='exercise-time'>
            
                <p className='padding'>Exercise time : {total} second</p>

            </div>
            <div className='exercise-time'>
                <p className='padding'>Break time : {breakTime} second</p>

            </div>
            <button className='btn-activity'onClick={()=>showToast()}>Activity Completed</button>

           </div>
           

        </div>
    );
};

export default Activity;