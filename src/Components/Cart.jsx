import { useCart } from "../Context/CartContext";

export default function Cart() {
  const { cart, removeFromCart, updateQty } = useCart();

  if (cart.length === 0) {
    return <p className="center">Your cart is empty</p>;
  }

  return (
    <div style={{ maxWidth: 800, margin: "0 auto" }}>
      <h2>Your Cart</h2>

      {cart.map(item => (
        <div 
          key={item.id} 
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: 12,
            padding: 12,
            background: "#fff",
            borderRadius: 8,
            boxShadow: "0 1px 4px rgba(0,0,0,0.06)"
          }}
        >
          <img 
            src={item.image} 
            alt={item.title} 
            style={{ width: 80, height: 80, objectFit: "contain" }} 
          />

          <div style={{ flex: 1, marginLeft: 12 }}>
            <h4 style={{ margin: 0 }}>{item.title}</h4>
            <p style={{ margin: "4px 0" }}>${item.price}</p>
          </div>

          <div>
            <button onClick={() => updateQty(item.id, item.qty - 1)} disabled={item.qty === 1}>
              -
            </button>

            <span style={{ padding: "0 8px" }}>{item.qty}</span>

            <button onClick={() => updateQty(item.id, item.qty + 1)}>
              +
            </button>
          </div>

          <button 
            onClick={() => removeFromCart(item.id)} 
            style={{ marginLeft: 12 }}
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}
