import { useState } from "react";
import Navbar from "./components/navbar/Navbar"
import Sidebar from "./components/sidebar/Sidebar"
import Hero from "./components/hero/Hero"
import About from "./components/about/About"
import "./app.scss"


function App() {
  const [openMenu, setOpenMenu] = useState(false)
  return (
    <div className="app">
      <Navbar openMenu={openMenu} setOpenMenu={setOpenMenu}/>
      <Sidebar openMenu={openMenu} setOpenMenu={setOpenMenu}/>
      <div>
        <Hero />
        <About />
      </div>
    </div>
  );
}

export default App;
