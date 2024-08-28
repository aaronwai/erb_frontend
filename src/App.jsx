import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Tours from "./components/Tours";
import Footer from "./components/Footer";
import Counter from "./components/Counter";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Counter />
      <About />
      <Services />
      <Tours />
      <Footer />
    </>
  );
}

export default App;
