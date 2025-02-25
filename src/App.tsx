import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import { Header } from "./components";

export default function Home() {
  return (
    <Router>
      <Header>
        <Routes>
          <Route path='/' element={'/'} />
          <Route path='/destination' element={'/'} />
          <Route path='/crew' element={'/'} />
          <Route path='/technology' element={'/'} />
        </Routes>
      </Header>
    </Router>
  );
}
