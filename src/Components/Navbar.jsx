import { Link } from "react-router-dom";
import { useCart } from "../Context/CartContext";

export default function Navbar() {
  const { cart } = useCart();

  return (
    <nav className="nav">
      <div className="nav-left">
        <Link to="/" className="logo">Shop</Link>
      </div>

      <div className="nav-right">
        <Link to="/cart" className="cart-link">
          Cart <span className="cart-count">{cart.length}</span>
        </Link>
      </div>
    </nav>
  );
}
