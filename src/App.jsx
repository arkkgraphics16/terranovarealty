import { useEffect } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import PropertyCard from './components/PropertyCard.jsx';
import Footer from './components/Footer.jsx';
// import CTASticky from './components/CTASticky.jsx'; // removed
import CookieBanner from './components/CookieBanner.jsx';
import { propertiesData } from './data/propertiesData.js';
import useSEO from './hooks/useSEO.js';

const offerings = [
  {
    title: 'Strategic Growth Corridors',
    description:
      'Mapping data-rich expansion zones that align investor visions with resilient market fundamentals and inclusive community impacts.',
  },
  {
    title: 'Due Diligence Without Compromise',
    description:
      'Executing comprehensive technical, legal, and socio-environmental reviews so every acquisition decision is grounded in clarity and care.',
  },
  {
    title: 'End-to-End Stewardship',
    description:
      'Guiding assets from acquisition to activation with advisory squads covering planning, approvals, partnerships, and go-to-market.',
  },
];

const sustainabilityHighlights = [
  'Low-impact site planning and watershed protection',
  'Community-first livelihood programs and skills training',
  'Carbon-positive reforestation partners across Luzon and Visayas',
];

const testimonials = [
  {
    quote:
      'TerraNova Realty reframed our idle landbank into a regenerative township roadmap that now anchors our ESG commitments.',
    author: 'Amelia Cruz',
    role: 'Managing Director, Horizon Legacy Capital',
  },
  {
    quote:
      'Their stewardship lens balances investor returns with community resilience—our stakeholders felt heard every step of the way.',
    author: 'Rafael del Mundo',
    role: 'Chairman, Verde Vista Holdings',
  },
];

const App = () => {
  const setSEO = useSEO();

  useEffect(() => {
    setSEO({
      title: "TerraNova Realty | Cultivating Tomorrow’s Landmark Communities",
      description:
        'TerraNova Realty guides land investors with strategic corridor identification, regenerative development advisory, and end-to-end stewardship.',
      openGraph: {
        url: 'https://terranovarealty.example/',
        image: 'https://terranovarealty.example/og-image.jpg',
        type: 'website',
      },
    });
  }, [setSEO]);

  const handleContactSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const vision = formData.get('vision');

    const subject = encodeURIComponent('TerraNova Realty Consultation Request');
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nProject Vision: ${vision}`
    );

    window.location.href = `mailto:advisors@terranovarealty.com?subject=${subject}&body=${body}`;
    event.currentTarget.reset();
  };

  return (
    <div className="app">
      <Header />
      <main>
        <Hero />

        <section id="offerings" className="section">
          <div className="section__header">
            <p className="eyebrow">Advisory Pillars</p>
            <h2>Offerings engineered for lasting land value.</h2>
            <p>
              From growth modeling to operational handover, TerraNova Realty delivers multidisciplinary expertise that positions
              your land assets ahead of emerging demand.
            </p>
          </div>
          <div className="card-grid">
            {offerings.map((item) => (
              <article key={item.title} className="info-card">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="portfolio" className="section section--alt">
          <div className="section__header">
            <p className="eyebrow">Featured Portfolio</p>
            <h2>Signature landholdings under TerraNova guidance.</h2>
            <p>
              Explore highlights from our advisory roster. Request a full dossier to uncover the complete range of sites ready
              for sustainable transformation.
            </p>
          </div>
          <div className="card-grid card-grid--portfolio">
            {propertiesData.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
          <div className="section__cta">
            <p>
              Looking for more? Share your investment thesis and we will curate a tailored portfolio briefing aligned with your
              target yield and stewardship objectives.
            </p>
            <a className="btn" href="#contact">
              Request Complete Portfolio
            </a>
          </div>
        </section>

        <section id="sustainability" className="section">
          <div className="section__header">
            <p className="eyebrow">Regenerative Lens</p>
            <h2>Embedded sustainability in every masterplan.</h2>
          </div>
          <div className="sustainability">
            <div className="sustainability__content">
              <p>
                TerraNova Realty ensures developments honor natural systems and strengthen regional livelihoods. Our advisory teams
                champion regenerative design principles, resilient infrastructure, and inclusive stakeholder engagement from day one.
              </p>
              <p>
                Together with specialized partners, we co-create climate-ready communities that safeguard watersheds, empower local
                economies, and future-proof investor value.
              </p>
            </div>
            <ul className="sustainability__list">
              {sustainabilityHighlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section id="testimonials" className="section section--alt">
          <div className="section__header">
            <p className="eyebrow">Investor Confidence</p>
            <h2>What partners say about TerraNova.</h2>
          </div>
          <div className="testimonials">
            {testimonials.map((testimonial) => (
              <blockquote key={testimonial.author}>
                <p>“{testimonial.quote}”</p>
                <footer>
                  <span className="testimonial__author">{testimonial.author}</span>
                  <span className="testimonial__role">{testimonial.role}</span>
                </footer>
              </blockquote>
            ))}
          </div>
        </section>

        <section id="contact" className="section">
          <div className="section__header">
            <p className="eyebrow">Partner With Us</p>
            <h2>Share your land vision.</h2>
            <p>
              Let’s design thriving communities together. Reach out through the channels below or send us a quick brief and our
              advisors will coordinate a discovery call within one business day.
            </p>
          </div>
          <div className="contact">
            <div className="contact__details">
              <h3>Direct lines</h3>
              <p>
                <strong>Phone:</strong> <a href="tel:+639178801122">+63 917 880 1122</a>
              </p>
              <p>
                <strong>Email:</strong> <a href="mailto:advisors@terranovarealty.com">advisors@terranovarealty.com</a>
              </p>
              <p>
                <strong>Office:</strong> 8F Greenfield Tower, Makati City, Philippines
              </p>
            </div>
            <form className="contact__form" onSubmit={handleContactSubmit}>
              <label>
                Name
                <input type="text" name="name" required placeholder="Full name" />
              </label>
              <label>
                Email
                <input type="email" name="email" required placeholder="you@company.com" />
              </label>
              <label>
                Phone
                <input type="tel" name="phone" required placeholder="Mobile or landline" />
              </label>
              <label>
                Project Vision
                <textarea name="vision" rows="4" required placeholder="Tell us about the community you envision" />
              </label>
              <button className="btn" type="submit">
                Send Consultation Request
              </button>
            </form>
          </div>
        </section>

        <section id="privacy" className="section section--alt">
          <div className="section__header">
            <p className="eyebrow">Privacy Commitment</p>
            <h2>Responsible data stewardship.</h2>
          </div>
          <p className="privacy">
            TerraNova Realty collects only the details you choose to share so we can deliver relevant land advisory insights. We
            safeguard submissions, honor local data regulations, and use essential cookies solely to improve your experience.
          </p>
        </section>
      </main>
      <Footer />
      {/* <CTASticky /> */} {/* removed */}
      <CookieBanner />
    </div>
  );
};

export default App;
