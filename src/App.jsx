import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Showcase from './components/Showcase';
import Contact from './components/Contact';

function App() {
  return (
    <div className="h-screen w-screen overflow-y-scroll bg-black text-white snap-y snap-mandatory scroll-smooth">
      <Navbar />
      <section className="h-screen snap-start">
        <Hero />
      </section>
      <section className="h-screen snap-start">
        <About />
      </section>
      <section className="h-screen snap-start">
        <Showcase />
      </section>
      <section className="h-screen snap-start">
        <Contact />
      </section>
    </div>
  );
}

export default App;
