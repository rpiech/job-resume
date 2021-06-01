import "./experience.scss"

export function Experience() {
  return (
    <section className="experience container container--pall">
      <div className="experience__content">
        <h2 className="experience__topic">My Work Experience</h2>
        <section className="experience__cards">
          <div className="experience__card">
            <div className="experience__icon">
              <img src="https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg" alt="" />
            </div>
            <h3 className="experience__topic">TypeScript</h3>
            <p>I was working with TS since I started working on project at WebActive. At first it was very restrictive but when you get used to it it's really handy and catches a lot of mistakes that you would probably made without static typing</p>
          </div>
          <div className="experience__card">
            <div className="experience__icon">
              <img src="https://mobx.js.org/img/mobx.png" alt="" />
            </div>
            <h3 className="experience__topic">Mobx</h3>
            <p>MobX is really heplful when it comes to lists, which I did more than I can count. It's intuitive library and with help of Observer you can render things when they change.</p>
          </div>
          <div className="experience__card">
            <div className="experience__icon">
              <img src="https://www.vectorlogo.zone/logos/trello/trello-icon.svg" alt="" />
            </div>
            <h3 className="experience__topic">Trello</h3>
            <p>With usage of Trello I've learnt about controlling your workflow with kanban. It really helped me with estimating time that was required to complete task and list all requirements to finish it.</p>
          </div>
          <div className="experience__card">
            <div className="experience__icon">
              <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="" />
            </div>
            <h3 className="experience__topic">Git</h3>
            <p>I've completed course on Udemy for using Git but in my work I was using GitLab rather than GitHub that I've used for some private projects while I was doing side-projects to improve my skill.</p>
          </div>
          <div className="experience__card">
            <div className="experience__icon">
              <img src="https://www.vectorlogo.zone/logos/ruby-lang/ruby-lang-icon.svg" alt="" />
            </div>
            <h3 className="experience__topic">Ruby on Rails</h3>
            <p>Biggest difficulty I've ever had while working was jumping between Frontend and Backend. On the Backend side I was using Ruby on Rails with Grape Framework basing my knowledge on existing code, help of Senior Developer and "Well-Grounded Rubyist".</p>
          </div>
          <div className="experience__card">
            <div className="experience__icon">
              <img src="https://img.icons8.com/cotton/452/grape.png" alt="" />
            </div>
            <h3 className="experience__topic">Grape</h3>
            <p>While working with Grape I was building services ( which was kinda heavy ), lists and filters ( which was way easier ). I've also wrote some simple tests for those services using RSPEC which is great because of it's simplicity of syntax.</p>
          </div>
        </section>
      </div>
    </section>
  )
}