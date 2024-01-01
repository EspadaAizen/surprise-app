import './App.css'; 
import React from 'react';
import{useNavigate} from 'react-router-dom';

function FirstPG(){
    const navigate = useNavigate();

function handleClick(){
    navigate("/SecondPG")
}
return(
    <>
    <div className="App">
      <header className="App-header">
        <div className="wlcm">
        <h2 >Welcome To Most Confidential Domain</h2>
        <h2>Your Highness</h2></div> 
        
        <button className='submit' onClick={handleClick}>Click Here To See Magic </button>   
      </header>
    </div>
    </>
);

}

export default FirstPG;