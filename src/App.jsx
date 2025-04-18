import NavBar from "./components/NavBar";
import Contact from "./sections/Contact";
import ExperienceSection from "./sections/ExperienceSection";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";
import TechStack from "./sections/TechStack";
import TitleHeader from "./components/TitleHeader";

const App = () =>{
    return (
        <>
        <NavBar />
        <Hero />
        <ShowcaseSection />
        <ExperienceSection />
        <TechStack />
        <Contact />
        <Footer />
        </>
    )
}

export default App;