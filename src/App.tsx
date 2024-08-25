// Components
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import About from "./views/About";
import Blog from "./views/Blog";

// Views
import Home from "./views/Home";
import Services from "./views/Services";
import Stylists from "./views/Stylists";
import StylistsDetail from "./views/StylistsDetail";

import { Route, Routes, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();

  return (
    <main className="flex flex-col">
      <header
        className={`absolute inset-x-0 top-0 z-10 flex ${
          location.pathname === "/" ? "justify-end" : "justify-between"
        } items-center p-2`}
      >
        {location.pathname !== "/" && (
          <a href="/">
            <img
              className="w-[203px] h-48px] ml-5"
              src="/Main-Logo.webp"
              alt="Public Image Logo"
              loading="lazy"
            />
          </a>
        )}
        <NavBar />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/stylists" element={<Stylists />} />
        <Route path="/stylists/:name" element={<StylistsDetail />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about-us" element={<About />} />
      </Routes>
      {location.pathname === "/" && <Footer />}
    </main>
  );
}

export default App;
