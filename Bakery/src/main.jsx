import { createRoot } from "react-dom/client";

import "./index.css";
import Testimonials from "./components/Testimonials.jsx";
import HeroSlideshow from "./components/HeroSection.jsx";
import ProductCard from "./components/PicCard.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

createRoot(document.getElementById("root")).render(
  <>
    <Header />
    <HeroSlideshow />
    <ProductCard />
    <Testimonials />
    <Footer />
  </>
);
