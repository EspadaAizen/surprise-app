import './AppA.css'; 
import React from 'react';
import{ Link } from 'react-router-dom';


const FirstPG =() =>{
return(
 <div className='App'>
   <header className="App-header">
  <div className="wlcm">
    <div className='head1'>
    <h2 >Welcome To Most Confidential Domain</h2>
    </div>
    <div className='head2'>
    <h2>Your Highness</h2>
    </div>
  <Link to="/second">
  <button className='submit'>Click Here To See Magic </button> </Link>  
  </div> 
</header>
 </div>
 

);
}

export default FirstPG;