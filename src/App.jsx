import Introduction from "./views/Introduction";
import HoverLinks from "./views/HoverLinks";
import Projects from "./views/Projects";
import Experiences from "./views/Experiences";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <HoverLinks />
      <Introduction />
      <Projects />
      <Experiences />
    </>
  );
}

export default App;
