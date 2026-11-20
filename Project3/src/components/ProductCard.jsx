import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product, onAddToCart }) => {
  if (!product) {
    return null;
  }

  return (
    <article className="product-card">
      <Link className="product-img" to={`/album/${product.id}`}>
        <img
          className="product-img"
          src={product.image}
          alt={product.title}
          loading="lazy"
        />
      </Link>
      <div className="product-info">
        <span className="product-genre">{product.genre}</span>
        <h3 className="product-name">
          <Link to={`/album/${product.id}`}>{product.title}</Link>
        </h3>
        <p className="product-artist">{product.artist}</p>
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
