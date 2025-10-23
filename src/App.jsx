import './App.css'
import './pages/UserDashboard/Styles/style.css';
import { Routes, Route } from 'react-router-dom';
import ScrollToTop from "./assets/ScrollToTop";
import Landingpage from './pages/Landingpage/Landingpage';
import Admin from './pages/Admin/Admin';
import UserDashboard from './pages/UserDashboard/UserDashboard';

function App() {

  return (
  <div className='App'>
    <ScrollToTop />
       <Routes>
        <Route path="/*" element={<Landingpage />} />
        <Route path="/admin/*" element={<Admin />} />
        <Route path="/user-dashboard/*" element={<UserDashboard />} />
      </Routes>
  </div>
  )
}

export default App
