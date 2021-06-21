import "../src/css/styles.css";
import "../src/js/scripts.js";
import About from "./components/About";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import Header from "./components/Header";

import Navbar from "./components/Navbar";
import Portifolio from "./components/Portifolio";
import Services from "./components/Services";
import Team from "./components/Team";

function App() {
  return (
    <div id="page-top">
      <Navbar/>
      <Header/>
      <Services/>
      <Portifolio/>
      <About/>
      <Team/>
      <Contacts/>
      <Footer/>
    </div>
  );
}

export default App;
