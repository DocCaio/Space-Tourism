import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Correct import from 'react-router-dom'
import { Header, Home } from './components';
import { Destination, Crew, Technology } from './Pages';

export default function App() {
  return (
    <Router>
      <Header/>
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Technology />} />
      </Routes>
    </Router>
  );
}
