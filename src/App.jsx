// In App.js
import './App.css'
import { Routes, Route } from 'react-router-dom';
import ScrollToTop from "./assets/ScrollToTop";
import Landingpage from './pages/Landingpage/Landingpage';
import Admin from './pages/Admin/Admin';
import UserDashboard from './pages/UserDashboard/UserDashboard';
import StoreLayout from './pages/Store/mystorelayout';

function App() {
  return (
    <div className='App'>
      <ScrollToTop />
      <Routes>
        <Route path="/*" element={<Landingpage />} />
        <Route path="/admin/*" element={<Admin />} />
        <Route path="/user-dashboard/*" element={<UserDashboard />} />
        <Route path="/store-dashboard/*" element={<StoreLayout />} />
        <Route path="/store-dashboard/:storeId/*" element={<StoreLayout />} />
      </Routes>
    </div>
  )
}

export default App;