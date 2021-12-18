import About from '../components/About';
import Feature from '../components/Feature';
import Hero from '../components/Hero';
import Header from '../components/Shared/Header';
import Skills from '../components/Skills';
import Values from '../components/Values';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Values />
      <Feature />
    </>
  );
}
