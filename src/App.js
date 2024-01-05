//
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FirstPG from './components/FirstPG';
import SecondPg from './components/SecondPG';
import ThirdPg from './components/ThirdPG';

const App = () => {
  return (
    <Router>
      <FirstPG/>
    <Switch>
      <Route exact path="/" component={FirstPG} />  {/* Main page route */}
      <Route path="/second" component={SecondPg} /> {/* Another page route */}
      <Route path="/third" component={ThirdPg} /> {/* Another page route */}
    </Switch>
  </Router>
  );
}

export default App;
