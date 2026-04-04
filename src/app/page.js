import Image from "next/image";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Services from "./components/Services";

export default function Home() {
  return (
    <div>
      <NavBar></NavBar>
      <Hero></Hero>
      <Services></Services>
      <h1 className="text-2xl text-center" >One-Little-Web</h1>
    </div>
  );
}
