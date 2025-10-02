const stats = [
  {
    label: 'Years guiding land investors',
    value: '15+',
  },
  {
    label: 'Hectares under advisory',
    value: '120',
  },
  {
    label: 'Net-zero ready masterplans',
    value: 'Flagship',
  },
];

const Hero = () => (
  <section id="hero" className="hero">
    <div className="hero__content">
      <p className="eyebrow">TerraNova Realty</p>
      <h1>Cultivating Tomorrow’s Landmark Communities.</h1>
      <p>
        We partner with visionary land investors to unlock strategic growth corridors, orchestrate regenerative
        development, and steward assets that honor people and planet.
      </p>
      <div className="hero__actions">
        <a className="btn" href="#portfolio">
          Explore Portfolio
        </a>
        <a className="btn btn--ghost" href="#contact">
          Talk to an Advisor
        </a>
      </div>
      <dl className="hero__stats">
        {stats.map((stat) => (
          <div key={stat.label}>
            <dt>{stat.label}</dt>
            <dd>{stat.value}</dd>
          </div>
        ))}
      </dl>
    </div>
    <div className="hero__visual" aria-hidden="true">
      <div className="hero__gradient" />
      <div className="hero__badge">
        <span>Strategic Land Stewardship</span>
      </div>
    </div>
  </section>
);

export default Hero;
