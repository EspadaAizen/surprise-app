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
                <Route exact path="/first" component={FirstPg} />  {/* Main page route */} 
                <Route path="/" component={SecondPg} /> {/* Another page route */}
                <Route path="/second" component={ThirdPg} />  {/* Another page route */}
            </Switch> 
        </div>
    </Router>
   
  )
}

export default Home
