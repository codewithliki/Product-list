import { Routes, Route } from "react-router-dom";
import ProductList from "./components/ProductLists";
import ProductDetails from "./components/ProductDetails";
import Cart from "./Components/Cart";
import Navbar from "./Components/Navbar";

// import { Link } from "react-router-dom";


export default function App() {
  return (
    <div className="app">
  <Navbar />

  <main>
    <Routes>
      <Route path="/" element={<ProductList />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  </main>
</div>

  );
}
