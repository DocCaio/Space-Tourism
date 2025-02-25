import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import { Header } from "./components";

export default function Home() {
  return (
    <Router>
      <Header>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/destination' element={<DestinationPage />} />
          <Route path='/crew' element={<CrewPage />} />
          <Route path='/technology' element={<TechnologyPage />} />
        </Routes>
      </Header>
    </Router>
  );
}
