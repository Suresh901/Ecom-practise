import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import Product from './Pages/Product/Product';
import Products from './Pages/Products/Products';
import ShoppingCart from './components/ShoppingCart';
import LoginPage from './Pages/Login/LoginPage';
import SharedLayout from './Layout/SharedLayout';
import Register from './Pages/Register/Register';
import Dashboard from './Pages/Dashboard/Dashboard';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<ShoppingCart />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />}>
          {/* <Route path="viewproducts" element={<DashboardProducts />} /> */}
        </Route>

      </Routes>
    </BrowserRouter>
  )
}


export default App
