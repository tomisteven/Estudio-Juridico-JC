import "./App.css";

import Footer from "./components/footer/Footer";
import AboutUs from "./components/about/About-Us";
import Header from "./components/header/Header";
import Properties from "./components/properties/Properties";
import HowItWork from "./components/how-it-work/How-it-work";
import Testmonials from "./components/testimonials/testimonials";
/* import Articles from "./components/articles/Articles.js"; */

function App() {
  return (
    <div className="site-container">
      <Header />
      <AboutUs />
      <Properties /> {/* <Articles /> */}
      <HowItWork />
      <Testmonials />
      <Footer />
    </div>
  );
}

export default App;
