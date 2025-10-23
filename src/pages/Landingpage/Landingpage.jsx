import { Routes, Route } from 'react-router-dom'; 
import './css/style.css';
import Home from './Pages/Home';
import About from './Pages/About';
import NavBar from './Components/NavBar';

const Landingpage = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default Landingpage;
