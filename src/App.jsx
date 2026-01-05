import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

// We register the pluging within the app because this gsap plugins aren't automatically active we have to register them.
// This line make sure that both plugins are ready to use globally across the app
gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <div className="h-dvh bg-black"></div>
    </main>
  );
};

export default App;
