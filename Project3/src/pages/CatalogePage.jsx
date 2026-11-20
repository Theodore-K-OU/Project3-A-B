import React, { useState } from "react";
import ProductCard from "../components/ProductCard";

function CatalogePage({ products, onAddToCart }) {
  const genre = ["All", "Jazz", "Electronic", "Rock", "Classical"];
  const [selectedGenre, setSelectedGenre] = useState("All");

  //check
  const validProduct = products || [];

  const filteredProducts =
    selectedGenre === "All"
      ? validProduct
      : validProduct.filter((p) => p.genre === selectedGenre);

  return (
    <div className="cataloge-container">
      <header className="filter-hero">
        <h1>Rare Vinyls</h1>
        <p>Collective Vinyl Albums for Enthusiasts</p>
      </header>

      {/** filter bar */}
      <div className="filter-bar">
        {genre.map((cat) => (
          <button
            key={cat}
            className={`filter-pill ${selectedGenre === cat ? "active" : ""}`}
            onClick={() => setSelectedGenre(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/**Product Grid */}
      <div className="product-grid">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </div>
  );
}

export default CatalogePage;
