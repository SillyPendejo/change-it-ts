import "./App.css";
import Header from "./components/Header";
import PromoTextFirst from "./components/PromoTextFirst";
import PromoTextSecond from "./components/PromoTextSecond";
import Overview from "./components/Overview";
import Slogan from "./components/Slogan";
import Faq from "./components/Faq";
import Reviews from "./components/Reviews";
import Blog from "./components/Blog/Blog";
import Checklist from "./components/Checklist/Checklist";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app__container">
      <div className="app__body">
        <Header />
        <PromoTextFirst />
        <Overview />
        <Slogan />
        <Faq />
        <PromoTextSecond />
        <Reviews />
        <Blog />
        <Checklist />
        <Footer />
      </div>
    </div>
  );
}

export default App;
