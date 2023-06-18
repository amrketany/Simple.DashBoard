import './App.css';
import Product from './Product';
import Nav from './Nav';
import { Routes, Route } from "react-router-dom";
import Sidebar from './Sidebar';
import Home from './Home';
import AddProduct from './AddProduct';
import ProductDetails from './ProductDetails';
import AllCategoties from './AllCategoties';
function App() {
  return (
    <div className="App">
      <Nav />
      <div className="row">
        <div className="col-3">
          <Sidebar />
        </div>
        <div className="col">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Product />} />
            <Route path="/categories" element={<AllCategoties />} />
            <Route path="products/add/:id" element={<AddProduct />} />
            <Route path="products/:id" element={<ProductDetails />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App;
