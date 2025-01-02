import { useEffect, useState } from 'react';
import './Hero.css';

export const Hero = () => {
  const phrases = [
    <>
      DARE TO BE <b style={{ fontWeight: 700 }}>RARE</b>
    </>,
    <>
      BE <b style={{ fontWeight: 700 }}>RARE</b>, ALWAYS
    </>,
    <>
      BE THE <b style={{ fontWeight: 700 }}>DIFFERENCE</b>, BE THE{' '}
      <b style={{ fontWeight: 700 }}>RARE</b>
    </>,
    <>
      BE <b style={{ fontWeight: 700 }}>RARE</b>, <br />
      BE YOU
    </>,
    <>
      DARE TO <b style={{ fontWeight: 700 }}>WEAR</b>, BE THE{' '}
      <b style={{ fontWeight: 700 }}>RARE</b>
    </>,
    <>
      DESIGNS TO <b style={{ fontWeight: 700 }}>SHARE</b>, STYLE TO{' '}
      <b style={{ fontWeight: 700 }}>SPARE</b>. BE THE{' '}
      <b style={{ fontWeight: 700 }}>RARE</b>
    </>,
  ];

  const [activeIndex, setActiveIndex] = useState(0); // Índice de la frase activa

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % phrases.length); // Cambia a la siguiente frase
    }, 4000); // Cambiar cada 4 segundos

    return () => clearInterval(interval); // Limpia el intervalo al desmontar
  }, [phrases.length]);

  return (
    <section className="hero" id="HOME">
      <div className="hero__container">
        <h1 className="hero__title">
          BE
          <wbr />
          THE
          <wbr />
          <b style={{ fontWeight: 700 }}>RARE</b>
        </h1>
        <div>
          {phrases.map((phrase, index) => (
            <h2
              key={index}
              className={`hero__subtitle ${index === activeIndex ? 'active' : ''}`} // Activa solo la frase actual
            >
              {phrase}
            </h2>
          ))}
        </div>
        <picture className="hero__picture"></picture>
      </div>
    </section>
  );
};
