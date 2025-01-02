import { useState } from 'react';

import './Form.css';

export const GoogleFormSubmit = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    // URL del endpoint del formulario de Google
    const googleFormEndpoint =
      'https://docs.google.com/forms/u/0/d/e/1FAIpQLSca3aW4_KNqJ993PUqRMJmfgD2LhfKI6aKsJe5MWmMaGoJ_lg/formResponse';

    // Configura los datos con el campo correspondiente al formulario
    const formData = new FormData();
    formData.append('emailAddress', email); // El campo debe coincidir con el payload que viste

    try {
      await fetch(googleFormEndpoint, {
        method: 'POST',
        body: formData,
        mode: 'no-cors', // Esto evitará que el navegador intente leer la respuesta
      });

      setMessage('¡Correo enviado exitosamente!');
      setEmail('');
    } catch (error) {
      console.log(error);
      setMessage(`Error de conexión. Intenta más tarde.`);
    }
  };

  return (
    <section className="form" id="FORM">
      <div className="form__container">
        {message !== '¡Correo enviado exitosamente!' && (
          <h2 className="form__subtitle">Únete a nuestra lista de espera</h2>
        )}
        {message === '¡Correo enviado exitosamente!' ? (
          <>
            <h2 className="form__subtitle">
              ¡Gracias por formar parte de{' '}
              <b style={{ fontWeight: 600, color: 'white' }}>BETHERARE</b>!
            </h2>
            <h3 className="form__subtitle" style={{ fontSize: '1.2rem' }}>
              Espera recibir actualizaciones en tu correo.
            </h3>
          </>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="input__wrapper">
              <input
                autoComplete="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Ingresa tu correo"
                required
                className="input"
              />
              <button type="submit" className="subscribe__btn">
                Enviar
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};
