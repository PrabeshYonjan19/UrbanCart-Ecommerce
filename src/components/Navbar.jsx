export default function Navbar({ cartCount }) {
  return (
    <>
      <div className="topbar">
        Free delivery on orders over $50
        <span>•</span>
        Easy 7-day returns
      </div>

      <nav className="navbar navbar-expand-lg navbar-dark main-nav sticky-top">
        <div className="container">
          <a className="navbar-brand fw-bold fs-4" href="#">
            UrbanCart
          </a>

          <button
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#nav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="nav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <a className="nav-link active" href="#shop">
                  Shop
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#deals">
                  Deals
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#features">
                  Why Us
                </a>
              </li>
            </ul>

            <button
              className="btn btn-light position-relative"
              data-bs-toggle="offcanvas"
              data-bs-target="#cart"
            >
              <i className="bi bi-bag"></i> Cart

              {cartCount > 0 && (
                <span className="cart-badge">{cartCount}</span>
              )}
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}