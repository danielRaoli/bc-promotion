import Hero from "./components/hero";
import ImageSection from "./components/image-section";
import Marketing from "./components/marketing";
import Projects from "./components/Projects";
import Process from "./components/Process";
import { Delivery } from "./components/Delivery";
import Contact from "./components/Contact";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
      <Hero />
      <ImageSection />
      <Marketing />
      <Projects />
      <Process />
      <Delivery />
      <Contact />
      <Footer />
    </>
  );
}
