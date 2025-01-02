import './Hero.css';

export const Hero = () => {
  return (
    <section className="hero" id="HOME">
      <div className="hero__container">
        <h1 className="hero__title">
          BETHE<b style={{ fontWeight: 600 }}>RARE</b>
        </h1>
        <h2 className="hero__subtitle">
          DARE TO BE <b style={{ fontWeight: 600 }}>RARE</b>
        </h2>
        <picture className="hero__picture"></picture>
      </div>
    </section>
  );
};
