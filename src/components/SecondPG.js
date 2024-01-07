import './AppB.css'; 
import React from 'react';
import{Link} from 'react-router-dom';
const SecondPG =() =>{
return (
<div className='SecondApp'>
    <header className='second-page'>
        <div className='blep'>
        <h2>Woopsie you have been blepped</h2>
        <h2 className='jk'>Hehehe nahh just kidding click on the button below</h2>
        <Link to="/third">
            <button className='submit-clone'>Click Here To See Magic Fr tho hehehe </button>
            </Link>
        </div>   
    </header>
</div>

);
}

export default SecondPG;