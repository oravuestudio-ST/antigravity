import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Portfolio from '../components/Portfolio';
import About from '../components/About';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Certifications from '../components/Certifications';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Portfolio />
        <About />
        <Experience />
        <Skills />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
