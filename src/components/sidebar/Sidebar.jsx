import "./sidebar.scss"

export default function Sidebar({openMenu, setOpenMenu}) {
  return (
    <div className={"sidebar " + (openMenu && "active")}>
      <ul className="sidebar__list">
        <li onClick={() => setOpenMenu(false)}>
          <a href="#">Home</a>
        </li>
        <li onClick={() => setOpenMenu(false)}>
        <a href="#">About me</a>
        </li>
        <li onClick={() => setOpenMenu(false)}>
          <a href="#">Work Experience</a>
        </li>
        <li onClick={() => setOpenMenu(false)}>
          <a href="#">Hobbies</a>
        </li>
        <li onClick={() => setOpenMenu(false)}>
          <a href="#">Contact</a>
        </li>
      </ul>
    </div>
  )
}