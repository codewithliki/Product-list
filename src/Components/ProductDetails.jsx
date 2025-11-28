import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;
    setLoading(true);
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => {
        if (!res.ok) throw new Error("Failed to load product");
        return res.json();
      })
      .then(data => setProduct(data))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p className="center">Loading product...</p>;
  if (error) return <p className="center">Error: {error}</p>;
  if (!product) return <p className="center">Product not found</p>;

  return (
    <div className="detail-wrap" style={{ maxWidth: 900, margin: "0 auto", padding: 16 }}>
      <button onClick={() => navigate(-1)} className="back-btn" style={{ marginBottom: 12 }}>
        ← Back
      </button>

      <div className="detail-grid" style={{ display: "grid", gridTemplateColumns: "320px 1fr", gap: 20 }}>
        <div style={{ background: "#fff", padding: 16, borderRadius: 8, boxShadow: "0 1px 6px rgba(0,0,0,0.06)" }}>
          <img src={product.image} alt={product.title} style={{ width: "100%", height: 320, objectFit: "contain", background: "#fafafa" }} />
        </div>

        <div>
          <h2 style={{ marginTop: 0 }}>{product.title}</h2>
          <p style={{ fontWeight: 700, margin: "8px 0" }}>${product.price}</p>
          <p style={{ color: "#666", marginTop: 12 }}>{product.description}</p>
          <p style={{ marginTop: 12, color: "#333" }}><strong>Category:</strong> {product.category}</p>
        </div>
      </div>
    </div>
  );
}
