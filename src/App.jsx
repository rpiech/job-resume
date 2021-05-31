import { useState } from "react";
import Navbar from "./components/navbar/Navbar"
import Sidebar from "./components/sidebar/Sidebar"
import Hero from "./components/hero/Hero"
import About from "./components/about/About"
import Work from "./components/work/Work"
import Hobbies from "./components/hobbies/Hobbies";
import Footer from "./components/footer/Footer"
import Game from "./components/hangman/Game";
import "./app.scss"
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { Experience } from "./components/experience/Experience";


function App() {
  const [openMenu, setOpenMenu] = useState(false)
  return (
    <Router>
      <div className="app">
        <Navbar openMenu={openMenu} setOpenMenu={setOpenMenu}/>
        <Sidebar openMenu={openMenu} setOpenMenu={setOpenMenu}/>
        <Switch>
          <Route path="/job-resume" exact component={Home} />
          <Route path="/experience" component={Experience} />
          <Route path="/game" component={Game} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <Hero />
    <About />
    <Work />
    <Hobbies />
  </div>
)

export default App;
