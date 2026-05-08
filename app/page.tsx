import Nav from "./components/Nav";
import Hero from "./components/Hero";
import TechStack from "./components/TechStack";
import Services from "./components/Services";
import Resume from "./components/Resume";
import Certificate from "./components/Certificate";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <TechStack />
        <Services />
        <Resume />
        <Certificate />
        <Work />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
