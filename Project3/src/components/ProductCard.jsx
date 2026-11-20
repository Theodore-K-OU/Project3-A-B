import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ ALBUMS, onAddToCart }) => {
  if (!ALBUMS) {
    return null;
  }

  return (
    <article className="product-card">
      <Link className="product-img" to={`/products/${product.id}`}>
        <img
          className="product-img"
          src={product.image}
          alt={product.name}
          loading="lazy"
        />
      </Link>
      <div className="product-info">
        <span className="product-genre">{product.genre}</span>
        <h3 className="product-name">
          <Link to={`/product/${product.id}`}>{product.name}</Link>
        </h3>
        <p className="product-price">${product.price.toFixed(2)}</p>
        <button
          className="btn btn-secondary btn-block"
          type="button"
          onClick={() => onAddToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    </article>
  );
};

export default ProductCard;
