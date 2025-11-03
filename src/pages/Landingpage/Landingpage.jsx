import { Routes, Route } from 'react-router-dom'; 
import './css/style.css';
import './css/main.css';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import Home from './Pages/Home/Home';
import About from './Pages/About';
import Products from './Pages/Products/Products';
import StoresList from './Pages/StoresList/StoresList';
import Store from './Pages/StoresList/Store';
import Services from './Pages/Services/Services';
import ProductDetails from './Pages/Products/ProductDetails';
import ServicesDetails from './Pages/Services/ServicesDetails';

const Landingpage = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product-detail/:id" element={<ProductDetails />} />
        <Route path="/stores" element={<StoresList />} />
        <Route path="/store/:id" element={<Store />} />
        <Route path="/services" element={<Services />} />
        <Route path="/service/:id" element={<ServicesDetails />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default Landingpage;