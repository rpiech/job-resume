import "./hero.scss";

export default function Hero() {
  return (
    <section className="hero">
    <div className="container">
      <div className="hero__image"></div>
      <div className="hero__text container--pall">
        <h1>Rafał Piech</h1>
        <h3>Junior Front-End Developer</h3>
      </div>
    </div>
  </section>
  )
}