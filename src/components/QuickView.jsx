export default function QuickView({
  product,
  onClose,
  onAdd,
}) {
  if (!product) {
    return null;
  }

  return (
    <div
      className="modal-backdrop-custom"
      onClick={onClose}
    >
      <div
        className="quick-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="btn-close float-end"
          onClick={onClose}
        ></button>

        <img src={product.img} alt={product.name} />

        <div className="p-4">
          <small>{product.category}</small>

          <h3>{product.name}</h3>

          <div className="rating">
            ★ {product.rating}
          </div>

          <h4 className="my-3">
            ${product.price.toFixed(2)}
          </h4>

          <p className="text-secondary">
            A stylish everyday product designed with comfort,
            quality and simple modern design in mind.
          </p>

          <button
            className="btn btn-dark w-100"
            onClick={() => {
              onAdd(product);
              onClose();
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}