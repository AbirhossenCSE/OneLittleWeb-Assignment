import Image from "next/image";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import OurTools from "./components/OurTools";
import WhyChooseUs from "./components/WhyChoseUs";
import Testimonial from "./components/Testimonial";
import FAQ from "./components/FAQ";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <title>One Little Web</title>
      <NavBar></NavBar>
      <Hero></Hero>
      <Services></Services>
      <Pricing></Pricing>
      <OurTools></OurTools>
      <WhyChooseUs></WhyChooseUs>
      <Testimonial></Testimonial>
      <FAQ></FAQ>
      <CTASection></CTASection>
      <Footer></Footer>
    </div>
  );
}
