import "./sidebar.scss"
import { Link } from 'react-router-dom'

export default function Sidebar({openMenu, setOpenMenu}) {
  return (
    <div className={"sidebar " + (openMenu && "active")}>
      <ul className="sidebar__list">
        <li onClick={() => setOpenMenu(false)}>
          <a href="/job-resume/#">Home</a>
        </li>
        <li onClick={() => setOpenMenu(false)}>
        <a href="/job-resume/#about">About me</a>
        </li>
        <li onClick={() => setOpenMenu(false)}>
          <a href="/job-resume/#work">Work</a>
        </li>
        <li onClick={() => setOpenMenu(false)}>
          <a href="/job-resume/#hobby">Hobbies</a>
        </li>
        <li onClick={() => setOpenMenu(false)}>
          <a href="/job-resume/#footer">Contact</a>
        </li>
        <Link to="/experience">
          <li onClick={() => setOpenMenu(false)}>
            <a>Experience</a>
          </li>
        </Link>
        <Link to="/game">
          <li onClick={() => setOpenMenu(false)}>
            <a>Game</a>
          </li>
        </Link>
      </ul>
    </div>
  )
}