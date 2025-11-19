import "./App.css";

import Footer from "./components/footer/Footer";
import AboutUs from "./components/about/About-Us";
import Header from "./components/header/Header";
import Properties from "./components/properties/Properties";
import HowItWork from "./components/how-it-work/How-it-work";
import Testmonials from "./components/testimonials/testimonials";
import Articles from "./components/articles/Articles.js";

function App() {
  return (
    <div className="site-container">
      <a className="skip-link" href="#contenido-principal">
        Saltar al contenido principal
      </a>
      <Header />
      <main id="contenido-principal" role="main">
        <h1 className="sr-only">
          Estudio Jurídico en Don Torcuato · Dr. Jorge Cancio &amp; Asociados
        </h1>
        <AboutUs />
        <Properties />
        <Articles />
        <HowItWork />
        <Testmonials />
      </main>
      <Footer />
    </div>
  );
}

export default App;
