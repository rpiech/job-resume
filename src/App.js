import { useState } from "react";
import Navbar from "./components/navbar/Navbar"

function App() {
  const [openMenu, setOpenMenu] = useState(false)
  return (
    <div className="App">
      <Navbar openMenu={openMenu} setOpenMenu={setOpenMenu}/>
    </div>
  );
}

export default App;
