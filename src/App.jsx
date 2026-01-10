import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Cocktails from "./components/Cocktails";
import About from "./components/About";
import Art from "./components/Art";

// We register the pluging within the app because this gsap plugins aren't automatically active we have to register them.
// This line make sure that both plugins are ready to use globally across the app
gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Cocktails />
      <About />
      <Art />
    </main>
  );
};

export default App;
