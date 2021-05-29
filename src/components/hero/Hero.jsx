import "./hero.scss"

export default function Hero() {
  return (
    <div className="hero" id="hero">
      <div className="hero__text">
        <div className="hero__wrapper">
          <h2>Hello There!</h2>
          <h1>I'm Rafał Piech</h1>
          <h3>Junior Front-End Developer</h3>
        </div>
      </div>
      <div className="hero__image">
        <img src="images/programmer.png" alt="" />
      </div>
    </div>
  )
}