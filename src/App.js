import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Main from './pages/Main';
import Agents from './pages/Agents';
import Weapons from './pages/Weapons';
import Maps from './pages/Maps';
import Footer from './components/Footer';
import Weapon from './pages/Weapon';
import Map from './pages/Map';
import Agent from './pages/Agent';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} > </Route>
        <Route path="/agentes" element={<Agents />} > </Route>
        <Route path="/armas" element={<Weapons />} > </Route>
        <Route path="/mapas" element={<Maps />} > </Route>
        <Route path="/armas/:uuid" element={<Weapon />} > </Route>
        <Route path="/mapas/:uuid" element={<Map />} > </Route>
        <Route path="/agentes/:uuid" element={<Agent />} > </Route>
      </Routes>
      <Footer/ >
    </Router>
  );
}

export default App;
