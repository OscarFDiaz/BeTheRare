import { useState } from 'react';

import './Form.css';

export const GoogleFormSubmit = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const googleFormEndpoint =
      'https://docs.google.com/forms/u/0/d/e/1FAIpQLSca3aW4_KNqJ993PUqRMJmfgD2LhfKI6aKsJe5MWmMaGoJ_lg/formResponse';

    const validateEmailWithAPI = async (email: string) => {
      const apiKey = import.meta.env.VITE_MAIL_KEY;

      setLoading(true);
      try {
        const response = await fetch(
          `https://apilayer.net/api/check?access_key=${apiKey}&email=${email}`,
        );
        const data = await response.json();
        setLoading(false);

        // Manejar el caso del límite de solicitudes (104)
        if (data.error?.code === 104) {
          console.warn('Límite de solicitudes alcanzado. Continuando sin validación.');
          return true; // Ignorar la validación de la API
        }

        // Validar correo si la API responde correctamente
        if (data.format_valid && data.smtp_check && data.score >= 0.6) {
          return true; // Correo válido
        } else {
          return false; // Correo inválido
        }
      } catch (error) {
        setLoading(false);
        console.error('Error al conectar con la API:', error);
        return false; // Asumir correo inválido si ocurre un error desconocido
      }
    };

    const isValid = await validateEmailWithAPI(email);
    if (!isValid) {
      setMessage('Correo inválido. Intenta con otro correo.');
      return; // Detener el flujo si el correo no es válido
    }

    const formData = new FormData();
    formData.append('emailAddress', email);

    try {
      await fetch(googleFormEndpoint, {
        method: 'POST',
        body: formData,
        mode: 'no-cors',
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
          <>
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
                <button type="submit" className="subscribe__btn" disabled={loading}>
                  {!loading ? 'Enviar' : '⏳'}
                </button>
              </div>
            </form>
            {message && <p style={{ marginTop: '16px' }}>{message}</p>}
          </>
        )}
      </div>
    </section>
  );
};
