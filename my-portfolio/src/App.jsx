import "./App.css";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NavigationBar from "./components/NavigationBar";
import ProjectSection from "./components/ProjectSection";

function App() {
  return (
    <div>
      <div
        data-bs-spy="scroll"
        data-bs-target="#navbar"
        data-bs-offset="80"
        data-bs-smooth-scroll="true"
        tabIndex="0"
      >
        <NavigationBar />
        <Header />
        <AboutSection />
        <ProjectSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
}

export default App;
