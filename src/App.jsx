import { Routes, Route } from "react-router-dom";
import ProductList from "./components/ProductLists";
import ProductDetails from "./components/ProductDetails";

export default function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>Product List</h1>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
      </main>
    </div>
  );
}
