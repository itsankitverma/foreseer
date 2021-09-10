import "./App.css";
//import Landingpage from "./landingpage";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Footer />
      {/* <Landingpage /> */}
    </div>
  );
}

export default App;
