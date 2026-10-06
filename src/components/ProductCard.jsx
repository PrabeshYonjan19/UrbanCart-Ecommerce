export default function ProductCard({
  product,
  onAdd,
  onQuickView,
}) {
  return (
    <div className="col-12 col-sm-6 col-lg-3">
      <div className="product-card h-100">
        <div className="product-image">
          {product.badge && (
            <span className="product-badge">
              {product.badge}
            </span>
          )}

          <img src={product.img} alt={product.name} />

          <button
            className="quick-btn"
            onClick={() => onQuickView(product)}
          >
            <i className="bi bi-eye"></i>
          </button>
        </div>

        <div className="p-3">
          <small className="text-secondary">
            {product.category}
          </small>

          <h5 className="mt-1 mb-1">
            {product.name}
          </h5>

          <div className="rating mb-2">
            ★ {product.rating}
          </div>

          <div className="d-flex justify-content-between align-items-center">
            <div>
              <strong>
                ${product.price.toFixed(2)}
              </strong>

              {product.old && (
                <del className="old-price ms-2">
                  ${product.old}
                </del>
              )}
            </div>

            <button
              className="btn btn-dark btn-sm"
              onClick={() => onAdd(product)}
            >
              <i className="bi bi-plus-lg"></i> Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}