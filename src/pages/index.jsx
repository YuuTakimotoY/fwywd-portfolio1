import About from '../components/About';
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
    </>
  );
}
