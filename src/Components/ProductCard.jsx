import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  const { image, title, price, id } = product;

  return (
    <div className="card">
      <img src={image} alt={title} className="thumb" />
      <div className="card-body">
        <h3 className="title">{title}</h3>
        <p className="price">${price}</p>
        <Link to={`/product/${id}`} className="btn">
          View Details
        </Link>
      </div>
    </div>
  );
}
