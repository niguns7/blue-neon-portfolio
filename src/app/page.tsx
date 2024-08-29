import Image from "next/image";
import Navbar from "./Navbar/Navbar";
import Hero from "./Hero/Hero";
import Services from "./Services/Services";
import Work from "./Work/Work";
import Count from "./Count/Count";
import Team from "./Team/Team";
import Testionial from "./Testimonial/Testionial";

export default function Home() {
  return (
    <>    
    <Hero />
    <Services />
    <Work />
    <Count />
    <Team />
    <Testionial />
    </>
    
  );
}
