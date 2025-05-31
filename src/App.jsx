import { useEffect } from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from "./Components/Footer";

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);
  return (
    <main>
      {/* Gradinet image */}
      <img className="absolute top-0 right-0 opacity-60 -z-10"
       src="/gradient.png"
      alt="Gradient Background" />

      {/* BLur Effect */}
      <div className="h-0 w-[40rem] absolute top-[20%] right-[5%]
       shadow-[0_0_900px_20px_#e99b63] -rotate-[30deg] -z-10">

      </div>
      <Header /> 
      <Hero />
      <Footer />
    </main>
  )
}