import './App.css';
import { BrowserRouter as Router , Route , Routes  } from 'react-router';
import { Header, Home } from './components';
import {Destination , Crew , Technology} from './Pages'





export default function App() {
  return (
   <Router>
    <Header/>

    <Routes>
      <Route path='/'>
       <Home/>
      </Route>     
      <Route path='/destination'></Route>
      <Destination/>
      <Route path='/crew'></Route>  
      <Crew/>    
      <Route path='/technology'></Route>
      <Technology/>
    </Routes>    
   </Router>
  );
}
