import "./about.scss"

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about__content container container--pall">
        <div className="about__intro">
          <h2>Why should you choose me?</h2>
          <p>Passionate and eager to learn junior front-end developer with a little background in back-end development ( Ruby on rails ). Looking for an opportunity to work in team and develop my skills even further.</p>
        </div>
        <div className="about__grid">
          <div className="about__item">
            <div className="about__icon"><img src="https://images.vexels.com/media/users/3/166383/isolated/preview/6024bc5746d7436c727825dc4fc23c22-html-programming-language-icon-by-vexels.png" alt=""/></div>
            <div className="about__title">
              HTML 5
            </div>
            <div className="about__description">
              Knowledge of HTML is a must have skill for every Front-End Developer to build websites.
            </div>
          </div>
          <div className="about__item">
            <div className="about__icon"><img src="https://3.bp.blogspot.com/-oRSUw_TmO9o/XIb61m88fcI/AAAAAAAAIq0/vnxl2zzsXEQsnHI2fH4GjKu_ZT0urRo4wCK4BGAYYCw/s1600/icon%2Bcss%2B3.png" alt=""/></div>
            <div className="about__title">
              CSS
            </div>
            <div className="about__description">
              While using CSS I usually go for SASS and stick to BEM naming convention.
            </div>
          </div>
          <div className="about__item">
            <div className="about__icon"><img src="https://cdn.iconscout.com/icon/free/png-256/javascript-2038874-1720087.png" alt=""/></div>
            <div className="about__title">
              JavaScript
            </div>
            <div className="about__description">
              Knowledge of JavaScript comes in handy with simple things like mapping. I usually read Kyle Simpson "You Don't Know JS Yet" and follow new things on dev.to or twitter.
            </div>
          </div>
          <div className="about__item">
            <div className="about__icon"><img src="https://icons-for-free.com/iconfiles/png/512/vscode+icons+type+typescript-1324451507894042344.png" alt=""/></div>
            <div className="about__title">
              TypeScript
            </div>
            <div className="about__description">
              In my recent job I was using TypeScript from the beginning alongside with React, MobX and MaterialUI.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}