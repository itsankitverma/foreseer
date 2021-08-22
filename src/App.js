import "./App.css";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import { Testimonials } from "./components/Testimonials";


function App() {
  return (
    <div>
      <Navbar />
      <Hero/>
      <Testimonials/>
      <Footer/>
    </div>
  );
}

export default App;
