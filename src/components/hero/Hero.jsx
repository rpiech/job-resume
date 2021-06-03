import "./hero.scss";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__image"></div>
        <div className="hero__text hero__container--pall">
          <h1>Rafał Piech</h1>
          <h3>Junior Front-End Developer from Warsaw, Poland</h3>
          <div className="hero__cta">
            <a href="https://github.com/rpiech" className="button">My GitHub</a>
          </div>
        </div>
      </div>
    </section>
  )
}