import React from "react";
import { useNavigate } from "react-router-dom";

const CartDrawer = ({ isOpen, cart, onClose, onUpdateQuality, onRemove }) => {
  //logic

  //new navigate
  const navigate = useNavigate();

  //if open break
  if (!isOpen) return null;

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quanity,
    0,
  );
  onClose();
  navigate("/checkout");
};

return (
  <div className="cart-Overlay" onClick={onClose}>
    <aside className="cart-panel" onClick={(e) => e.stopPropagation()}>
      <div className="cart-header">
        <h2>Current Cart ({cart.length})</h2>
        <button type="button" className="btn-close" onClick={onClose}>
          &times;
        </button>
      </div>

      <div className="cart-body">
        {cart.length === 0 ? (
          <div className="empty-cart">Cart is empty</div>
        ) : (
          <ul className="cart-list">
            {cart.map((item) => (
              <li key={item.id} className="cart-item">
                <img
                  src={item.image}
                  alt={item.name}
                  className="cart-item-img"
                />

                <div className="cart-item-info">
                  <h4>{item.name}</h4>
                  <p className="cart-item-price">
                    ${(item.price * item.quanity).toFixed(2)}
                  </p>
                  <div className="qty-controls">
                    <button onClick={() => onUpdateQuanity(item.id, -1)}>
                      -
                    </button>
                    <span>{item.quanity}</span>
                    <button onClick={() => onUpdateQuanity(item.id, 1)}>
                      +
                    </button>
                    <button
                      className="btn-remove"
                      onClick={() => onRemove(item.id)}
                    >
                      🗑️
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      {cart.length > 0 && (
        <div className="cart-footer">
          <div className="subtotal-row">
            <span>Subtotal:</span>
            <strong>${subtotal.toFixed(2)}</strong>
          </div>
          <button
            type="button"
            className="btn btn-primary btn-block"
            onClick={handleProceedToCheckout}
          >
            To Checkout
          </button>
        </div>
      )}
    </aside>
  </div>
);

export default CartDrawer;
