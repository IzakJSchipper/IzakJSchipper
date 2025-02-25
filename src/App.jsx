import {useState} from "react";
import './App.css'
import { LoadingScreen } from "./components/loadingScreen.jsx";
import "./index.css";
import { Navbar } from "./components/Navbar.jsx";
import { MobileMenu } from "./components/MobileMenu.jsx";
import { Home } from "./components/sections/home.jsx";
import { About } from "./components/sections/about.jsx";
import { Projects } from "./components/sections/projects.jsx";
import {Contact} from "./components/sections/contact.jsx";
import {TracingBeam} from "./components/ui/tacing-beam.js";

function App() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [MenuOpen, setMenuOpen] = useState(false);

  return (
    <>
        {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}

        <div className={`min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"} bg-black text-gray-100`}>

            <Navbar MenuOpen={MenuOpen} setMenuOpen={setMenuOpen} />
            <MobileMenu MenuOpen={MenuOpen} setMenuOpen={setMenuOpen} />
            <TracingBeam>
            <Home />
            <About />
            <Projects />
            <Contact />
            </TracingBeam>

        </div>

    </>
  );
}

export default App
