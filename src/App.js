import { useState } from "react";
import Navbar from "./components/navbar/Navbar"
import Sidebar from "./components/sidebar/Sidebar"


function App() {
  const [openMenu, setOpenMenu] = useState(false)
  return (
    <div className="App">
      <Navbar openMenu={openMenu} setOpenMenu={setOpenMenu}/>
      <Sidebar openMenu={openMenu} setOpenMenu={setOpenMenu}/>
    </div>
  );
}

export default App;
