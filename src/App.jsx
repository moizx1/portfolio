import Introduction from "./views/Introduction";
import HoverLinks from "./views/HoverLinks";
import Projects from "./views/Projects";
import Experience from "./views/Experience";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <HoverLinks />
      <Introduction />
      <Projects />
      <Experience />
    </>
  );
}

export default App;
