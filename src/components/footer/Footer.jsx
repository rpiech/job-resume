import "./footer.scss"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <a className="footer__logo" href="#">
          <img src="https://www.pngrepo.com/download/20907/programmer.png" alt="logo"/>
        </a>

        {/* <div className="footer__links col-1">
          <a href="#">Lorem</a>
          <a href="#">Ipsum</a>
          <a href="#">Dolet</a>
        </div>

        <div className="footer__links col-2">
          <a href="#">Lorem</a>
          <a href="#">Ipsum</a>
          <a href="#">Dolet</a>
        </div> */}

        <div className="footer__cta">
          <a href="" className="button">My GitHub</a>
        </div>
        <div className="footer__copyright">Lorem Ipsum Dolet 2021</div>
      </div>
    </footer>

  )
}