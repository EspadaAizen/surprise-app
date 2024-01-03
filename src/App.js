//import './App.css'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SecondPg from './components/SecondPG';
import FirstPG from './components/FirstPG';
import ThirdPg from './components/ThirdPG';

const App = () => {
  return (
    <Router>
    <Routes>
      <Route exact path="/" component={FirstPG} />  {/* Main page route */}
      <Route path="/second" component={SecondPg} /> {/* Another page route */}
    </Routes>
  </Router>
  );
}

export default App;
