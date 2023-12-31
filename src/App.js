
import './App.css'; 
import {
  Routes,
  Route,
} from 'react-router-dom';
import SecondPg from './SecondPG';
import FirstPG from './FirstPG';
import ThirdPg from './ThirdPG';
function App() {
  
  return (
 <Routes>
  <Route path='/' element={<FirstPG/>}/>
  <Route path='/SecondPG' element={<SecondPg/>}/>
  <Route path='/ThirdPG' element={<ThirdPg/>}/>
 </Routes>
  );
}

export default App;
