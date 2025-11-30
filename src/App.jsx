import { Routes, Route } from "react-router-dom";
import ProductList from "./components/ProductLists";
import ProductDetails from "./components/ProductDetails";
import Cart from "./Components/Cart";
import { Link } from "react-router-dom";


export default function App() {
  return (
    <div className="app">
      <nav>
        <Link to="/cart" className="btn">Cart</Link>
      </nav>
      <header className="header">
        <h1>Product List</h1>
      </header>

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
