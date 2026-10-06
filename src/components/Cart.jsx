export default function Cart({
  cart,
  cartCount,
  cartTotal,
  changeQuantity,
}) {
  return (
    <div
      className="offcanvas offcanvas-end"
      tabIndex="-1"
      id="cart"
    >
      <div className="offcanvas-header">
        <h5>Your Cart ({cartCount})</h5>

        <button
          className="btn-close"
          data-bs-dismiss="offcanvas"
        ></button>
      </div>

      <div className="offcanvas-body">
        {!cart.length ? (
          <div className="text-center text-secondary mt-5">
            <i className="bi bi-bag fs-1"></i>
            <p>Your cart is empty.</p>
          </div>
        ) : (
          <>
            {cart.map((item) => (
              <div className="cart-item" key={item.id}>
                <img src={item.img} alt={item.name} />

                <div className="flex-grow-1">
                  <b>{item.name}</b>

                  <div>
                    ${item.price.toFixed(2)}
                  </div>

                  <div className="qty">
                    <button
                      onClick={() =>
                        changeQuantity(item.id, -1)
                      }
                    >
                      -
                    </button>

                    <span>{item.qty}</span>

                    <button
                      onClick={() =>
                        changeQuantity(item.id, 1)
                      }
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))}

            <hr />

            <div className="d-flex justify-content-between fs-5">
              <b>Total</b>
              <b>${cartTotal.toFixed(2)}</b>
            </div>

            <button className="btn btn-dark w-100 mt-3">
              Proceed to Checkout
            </button>
          </>
        )}
      </div>
    </div>
  );
}