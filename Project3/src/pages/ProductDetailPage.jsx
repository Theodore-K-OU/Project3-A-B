import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

const ProductDetailPage = ({ products, onAddToCart }) => {
  //component state
  const { albumId } = useParams();
  const [qty, setQty] = useState(1);
  //what to didplay
  const product = products.find((p) => p.id === albumId);

  //check if missing
  if (!product) {
    return (
      <div className="product-error">
        <h2>Product Not Found</h2>
        <Link className="btn btn-secondary" to="/">
          Back to Catalog
        </Link>
      </div>
    );
  }

  return (
    <div className="-detail-container">
      <nav className="breadcrumb">
        <Link to="/">Catalog</Link> &gt; <span>{product.title}</span>
      </nav>

      <div className="detail-grid">
        <img src={product.image} alt={product.title} className="detail-image" />

        <div className="detail-info">
          <span className="detail-genre">{product.genre}</span>
          <h1 className="detail-name">{product.title}</h1>
          <p className="detail-artist">{product.artist}</p>
          <p className="detail-description">{product.description}</p>
          <p className="detail-price">${product.price.toFixed(2)}</p>
          <div className="stock-tag">
            {product.stock > 0 ? (
              <span className="in-stock">✓ In Stock</span>
            ) : (
              <span className="out-of-stock">Out of Stock</span>
            )}
          </div>
          <ul className="detail-specs">
            <li>
              <strong>Catalog Number:</strong> {product.specs.catalogNumber}
            </li>
            <li>
              <strong>Weight:</strong> {product.specs.weight}
            </li>
            <li>
              <strong>Speed:</strong> {product.specs.speed}
            </li>
            <li>
              <strong>Label:</strong> {product.specs.label}
            </li>
          </ul>
          <div className="detail-tracklist">
            <h3>Tracklist:</h3>
            <ol>
              {product.tracklist.map((track, index) => (
                <li key={index}>{track}</li>
              ))}
            </ol>
          </div>
          <div className="detail-actions">
            <div className="qty-selector">
              <label htmlFor="qty">Qty:</label>
              <input
                type="number"
                id="qty"
                min="1"
                max={product.stock}
                value={qty}
                onChange={(e) =>
                  setQty(Math.max(1, parseInt(e.target.value, 10) || 1))
                }
              />
            </div>
            <button
              className="btn btn-primary"
              onClick={() => onAddToCart(product, qty)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
