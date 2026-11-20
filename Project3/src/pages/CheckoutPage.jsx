import React, { useState } from "react";
import { Link } from "react-router-dom";

const CheckoutPage = ({ cart, onClearCart }) => {
  //check
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    shippingAddress: "",
    zipCode: "",
  });

  //subtotal
  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  //taxes
  const taxes = subtotal * 0.06;
  const total = subtotal + taxes;

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  //eventlistners
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    onClearCart();
  };

  if (isSubmitted) {
    return (
      <div className="checkout-confirm">
        <h2>Thank you for your order, {formData.name}!</h2>
        <p>A confirmation email has been sent to {formData.email}.</p>
        <p>Your order will be shipped to:</p>

        <Link className="btn btn-secondary" to="/">
          Back to Catalog
        </Link>
      </div>
    );
  }

  //handle empty cart
  if (cart.length === 0) {
    return (
      <div className="checkout-empty">
        <h2>Your cart is empty</h2>
        <Link className="btn btn-secondary" to="/">
          return to Catalog
        </Link>
      </div>
    );
  }
  return (
    <div className="checkout-container">
      <h1>Checkout</h1>

      <div className="checkout-grid">
        <form className="checkout-form" onSubmit={handleSubmit}>
          <h2>Shipping Information</h2>
          <div className="form-group">
            <label htmlFor="name">
              Name:<span>*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">
              Email:<span>*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="shippingAddress">
              Shipping Address:<span>*</span>
            </label>
            <input
              type="text"
              id="shippingAddress"
              name="shippingAddress"
              required
              value={formData.shippingAddress}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="zipCode">
              Zip Code:<span>*</span>
            </label>
            <input
              type="text"
              id="zipCode"
              name="zipCode"
              required
              value={formData.zipCode}
              onChange={handleInputChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Place Order
          </button>
        </form>

        {/* invoice */}
        <aside className="checkout-invoice">
          <h3>Invoice</h3>
          <ul className="invoice-list">
            {cart.map((item) => (
              <li key={item.id} className="invoice-item">
                <span>
                  {item.title} x {item.quantity}
                </span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </li>
            ))}
          </ul>
          <hr />
          <div className="summary">
            <div className="summary-row">
              <span>Subtotal:</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="summary-row">
              <span>Taxes (6%):</span>
              <span>${taxes.toFixed(2)}</span>
            </div>
            <div className="summary-row total">
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};
export default CheckoutPage;
