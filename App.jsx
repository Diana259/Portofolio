import Topbar from "./components/topbar/Topbar"
import Intro from "./components/intro/Intro"
import Portofolio from "./components/portofolio/Portofolio"
import Works from "./components/works/Works"
import Contact from "./components/contact/Contact"
import "./app.scss"
import { useState} from "react";
import Menu from "./components/Menu"

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
      <Intro />
      <Portofolio />
      <Works />
      <Contact />
      </div>
    </div>
  );
}

export default App;
