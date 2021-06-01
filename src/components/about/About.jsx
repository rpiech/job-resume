import "./about.scss"

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about__content container container--pall">
        <div className="about__intro">
          <h2>Why should you choose me?</h2>
          <p>Passionate and eager to learn junior front-end developer with a little background in back-end development ( Ruby on rails ). Looking for an opportunity to work in team and develop my skills even further.</p>
        </div>
        <section className="about__grid">
          <article className="about__item">
            <div className="about__icon"><img src="https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg" alt=""/></div>
            <h3 className="about__title">
              HTML 5
            </h3>
            <p className="about__description">
              Knowledge of HTML is a must have skill for every Front-End Developer to build websites.
            </p>
          </article>
          <article className="about__item">
            <div className="about__icon"><img src="https://www.vectorlogo.zone/logos/netlifyapp_watercss/netlifyapp_watercss-ar21.svg" alt=""/></div>
            <h3 className="about__title">
              CSS
            </h3>
            <p className="about__description">
              While using CSS I usually go for SASS and stick to BEM naming convention.
            </p>
          </article>
          <article className="about__item">
            <div className="about__icon"><img src="https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg" alt=""/></div>
            <h3 className="about__title">
              JavaScript
            </h3>
            <p className="about__description">
              Knowledge of JavaScript comes in handy with simple things like mapping. I usually read Kyle Simpson "You Don't Know JS Yet" and follow new things on dev.to or twitter.
            </p>
          </article>
          <article className="about__item">
            <div className="about__icon"><img src="https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg" alt=""/></div>
            <h3 className="about__title">
              TypeScript
            </h3>
            <p className="about__description">
              In my recent job I was using TypeScript from the beginning alongside with React, MobX and MaterialUI.
            </p>
          </article>
        </section>
      </div>
    </section>
  )
}