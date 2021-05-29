import "./about.scss"

export default function About() {
  return (
    <section class="about" id="about">
      <div class="about__content container container--pall">
        <div class="about__intro">
          <h2>Why should you choose me?</h2>
          <p>Passionate and willing to learn junior front-end developer with a little background in back-end development ( Ruby on rails ). Looking for an opportuinty to work in team and develop my skills even further.</p>
        </div>
        <div class="about__grid">
          <div class="about__item">
            <div class="about__icon"><img src="images/html.png" alt=""/></div>
            <div class="about__title">
              HTML 5
            </div>
            <div class="about__description">
              Ksnowledge of HTML is a must have skill for every Front-End Developer to build websites.
            </div>
          </div>
          <div class="about__item">
            <div class="about__icon"><img src="images/css.png" alt=""/></div>
            <div class="about__title">
              CSS
            </div>
            <div class="about__description">
              While using CSS I usually go for SASS and stick to BEM naming convention.
            </div>
          </div>
          <div class="about__item">
            <div class="about__icon"><img src="images/js.png" alt=""/></div>
            <div class="about__title">
              JavaScript
            </div>
            <div class="about__description">
              Knowledge of JavaScript comes in handy with simple things like slider.
            </div>
          </div>
          <div class="about__item">
            <div class="about__icon"><img src="images/ts.png" alt=""/></div>
            <div class="about__title">
              TypeScript
            </div>
            <div class="about__description">
              In my recent job I was using TypeScript from the beginning alongside with React, MobX and MaterialUI.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}