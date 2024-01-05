import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FirstPg from './FirstPG';
import SecondPg from './SecondPG';
import EndPg from './EndPG';
function Home() {
  return (
    <Router>
         <div>
            <Switch>
                <Route  exact path="/lll" component={FirstPg} />  {/* Main page route */} 
                <Route  path="/" component={SecondPg} /> {/* Another page route */}
                <Route  exact path="/end" component={EndPg}/>
            </Switch> 
        </div>
    </Router>
   
  )
}

export default Home
