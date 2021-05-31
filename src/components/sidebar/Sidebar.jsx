import "./sidebar.scss"
import { Link } from 'react-router-dom'

export default function Sidebar({openMenu, setOpenMenu}) {
  return (
    <div className={"sidebar " + (openMenu && "active")}>
      <ul className="sidebar__list">
        <li onClick={() => setOpenMenu(false)}>
          <a href="/#">Home</a>
        </li>
        <li onClick={() => setOpenMenu(false)}>
        <a href="/#about">About me</a>
        </li>
        <li onClick={() => setOpenMenu(false)}>
          <a href="/#work">Work</a>
        </li>
        <li onClick={() => setOpenMenu(false)}>
          <a href="/#hobby">Hobbies</a>
        </li>
        <li onClick={() => setOpenMenu(false)}>
          <a href="/#footer">Contact</a>
        </li>
        <Link to="/experience">
          <li onClick={() => setOpenMenu(false)}>
            <a href="/experience">Experience</a>
          </li>
        </Link>
      </ul>
    </div>
  )
}