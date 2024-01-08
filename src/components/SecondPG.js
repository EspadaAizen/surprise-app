import './AppB.css'; 
import React from 'react';
import{Link} from 'react-router-dom';
const SecondPG =() =>{
return (
<div className='SecondApp'>
    <header className='second-page'>
        <div className='blep'>
        <div className='head1'>
        <h2>Woopsie you have been blepped!!!:p</h2>
        </div>
        <div className='head2'>
        <h2>Hehehe nahh just kidding click on the button below</h2>
        </div>    
        <Link to="/third">
            <button className='submit-clone'>Click Here To See Magic Fr tho hehehe </button>
            </Link>
        </div>   
    </header>
</div>

);
}

export default SecondPG;