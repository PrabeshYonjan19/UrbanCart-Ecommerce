const features = [
  ["bi-truck", "Fast Delivery", "Quick and reliable shipping"],
  ["bi-shield-check", "Secure Payment", "Safe checkout experience"],
  ["bi-arrow-repeat", "Easy Returns", "7-day simple returns"],
  ["bi-headset", "Support", "Friendly customer support"],
];

export default function Features() {
  return (
    <section id="features" className="container py-4">
      <div className="row g-3">
        {features.map(([icon, title, description]) => (
          <div className="col-6 col-lg-3" key={title}>
            <div className="feature-card">
              <i className={`bi ${icon}`}></i>

              <div>
                <b>{title}</b>
                <small>{description}</small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}