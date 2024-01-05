import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FirstPg from './FirstPG';
import SecondPg from './SecondPG';
import ThirdPg from './ThirdPG';
function Home() {
  return (
    <Router>
         <div>
            <Switch>
                <Route exact path="/third" component={ThirdPg}/> 
                <Route exact path="/second" component={SecondPg} /> {/* Another page route */}
                <Route  path="/" component={FirstPg} />  {/* Main page route */} 
                
                
            </Switch> 
        </div>
    </Router>
   
  )
}

export default Home
