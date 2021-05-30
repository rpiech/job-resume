import "./footer.scss"

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="container">
        <a className="footer__logo" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
          <img src="https://www.pngrepo.com/download/20907/programmer.png" alt="logo"/>
        </a>
        <div className="footer__cta">
          <a href="https://github.com/rpiech" className="button">My GitHub</a>
        </div>
        <div className="footer__copyright">Lorem Ipsum Dolet 2021</div>
      </div>
    </footer>

  )
}