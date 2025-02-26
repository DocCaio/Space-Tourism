import './App.css';
import { BrowserRouter as Router , Route , Routes  } from 'react-router';
import { Header } from './components';



export default function Home() {
  return (
   <Router>
    <Header/>

    <Routes>
      <Route path='/'></Route>
      <Route path='/destination'></Route>
      <Route path='/crew'></Route>      
      <Route path='/technology'></Route>
    </Routes>    
   </Router>
  );
}
