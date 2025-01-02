import { Footer } from './components/Footer/Footer';
import { GoogleFormSubmit } from './components/Form/GoogleFormSubmit';
import { Hero } from './components/Hero/Hero';
import { Navbar } from './components/Navbar/Navbar';

function App() {
  return (
    <main
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        minHeight: '100vh',
      }}
    >
      <Navbar />
      <Hero />
      <GoogleFormSubmit />
      <Footer />
    </main>
  );
}

export default App;
