const PropertyCard = ({ property }) => (
  <article className="property-card">
    <div className="property-card__header">
      <span className="property-card__ref">Ref. #{property.id}</span>
      <h3>{property.name}</h3>
      <p className="property-card__location">{property.location}</p>
    </div>
    <p className="property-card__description">{property.description}</p>
    <dl className="property-card__meta">
      <div>
        <dt>Land area</dt>
        <dd>{property.size}</dd>
      </div>
      <div>
        <dt>Advisory status</dt>
        <dd>{property.status}</dd>
      </div>
    </dl>
    <ul className="property-card__highlights">
      {property.highlights.map((highlight) => (
        <li key={highlight}>{highlight}</li>
      ))}
    </ul>
    <a className="btn btn--block" href="#contact">
      Inquire About This Land
    </a>
  </article>
);

export default PropertyCard;
