import './AppA.css'; 
import React from 'react';
import{ Link } from 'react-router-dom';


const FirstPG =() =>{
return(
 
  <div className="App-header">
  <div className="wlcm">
  <h2 >Welcome To Most Confidential Domain</h2>
  <h2>Your Highness</h2></div> 
  <Link to="/second">
  <button className='submit'>Click Here To See Magic </button> </Link>  
</div>

);
}

export default FirstPG;