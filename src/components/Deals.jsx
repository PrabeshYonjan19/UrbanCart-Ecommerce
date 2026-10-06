export default function Deals() {
  return (
    <section id="deals" className="container pb-5">
      <div className="deal-banner p-4 p-md-5 rounded-4">
        <div>
          <span className="badge text-bg-warning mb-2">
            LIMITED OFFER
          </span>

          <h2>Up to 30% off selected items</h2>

          <p className="mb-0">
            Refresh your everyday collection without breaking
            the budget.
          </p>
        </div>

        <a href="#shop" className="btn btn-light">
          Explore Deals
        </a>
      </div>
    </section>
  );
}