import ProductCard from "./ProductCard";

export default function ProductList({
  products,
  categories,
  category,
  setCategory,
  search,
  setSearch,
  onAdd,
  onQuickView,
}) {
  return (
    <section id="shop" className="container py-5">
      <div className="d-flex flex-wrap justify-content-between align-items-end gap-3 mb-4">
        <div>
          <p className="section-label mb-1">
            OUR COLLECTION
          </p>

          <h2 className="fw-bold mb-0">
            Featured Products
          </h2>
        </div>

        <div className="input-group search-box">
          <span className="input-group-text bg-white">
            <i className="bi bi-search"></i>
          </span>

          <input
            className="form-control"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search products..."
          />
        </div>
      </div>

      {/* Categories */}
      <div className="d-flex gap-2 flex-wrap mb-4">
        {categories.map((item) => (
          <button
            key={item}
            onClick={() => setCategory(item)}
            className={`btn ${
              category === item
                ? "btn-dark"
                : "btn-outline-secondary"
            } rounded-pill px-3`}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Products */}
      <div className="row g-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAdd={onAdd}
            onQuickView={onQuickView}
          />
        ))}
      </div>

      {!products.length && (
        <div className="empty text-center py-5">
          <i className="bi bi-search fs-1"></i>
          <h4>No products found</h4>
          <p>Try another search or category.</p>
        </div>
      )}
    </section>
  );
}