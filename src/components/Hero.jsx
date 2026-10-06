export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="row align-items-center g-4">
          <div className="col-lg-6">
            <span className="badge rounded-pill text-bg-light mb-3">
              NEW SEASON COLLECTION
            </span>

            <h1>
              Find things you'll <span>love.</span>
            </h1>

            <p className="lead">
              A clean collection of everyday fashion,
              accessories and tech for your lifestyle.
            </p>

            <a
              href="#shop"
              className="btn btn-light btn-lg px-4 me-2"
            >
              Shop Now <i className="bi bi-arrow-right"></i>
            </a>

            <a
              href="#deals"
              className="btn btn-outline-light btn-lg px-4"
            >
              View Deals
            </a>
          </div>

          <div className="col-lg-6">
            <img
              className="hero-img"
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1000"
              alt="Store"
            />
          </div>
        </div>
      </div>
    </section>
  );
}