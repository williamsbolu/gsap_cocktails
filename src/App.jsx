import gsap from "gsap";
import { ScrollToPlugin, SplitText } from "gsap/all";

// We register the pluging within the app because this gsap plugins aren't automatically active we have to register them.
// This line make sure that both plugins are ready to use globally across the app
gsap.registerPlugin(ScrollToPlugin, SplitText);

const App = () => {
  return (
    <div className="flex-center h-screen">
      <h1 className="text-8xl text-indigo-300">Hello, GSAP!</h1>
    </div>
  );
};

export default App;
