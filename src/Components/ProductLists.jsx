import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => {
        if (!res.ok) throw new Error("Failed to load");
        return res.json();
      })
      .then(data => {
        setProducts(data);
        setFiltered(data);
      })
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  function filterProducts() {
    let temp = [...products];

    if (search.trim()) {
      temp = temp.filter(p =>
        p.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category !== "all") {
      temp = temp.filter(p => p.category === category);
    }

    setFiltered(temp);
  }

  useEffect(() => {
    filterProducts();
  }, [search, category, products]);

  if (loading) return <p className="center">Loading products...</p>;
  if (error) return <p className="center">Error: {error}</p>;

  const categories = [...new Set(products.map(p => p.category))];

  return (
    <div>
      <div className="filter-bar">
        <input
          type="text"
          placeholder="Search products"
          className="search-input"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />

        <select
          className="select-input"
          value={category}
          onChange={e => setCategory(e.target.value)}
        >
          <option value="all">All Categories</option>
          {categories.map(c => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      </div>

      <div className="grid">
        {filtered.map(p => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
