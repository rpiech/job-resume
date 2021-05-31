import "./experience.scss"

export function Experience() {
  return (
    <section className="experience container container--pall">
      <div className="experience__content">
        <div className="experience__topic"><h2>My Work Experience</h2></div>
        <section className="experience__cards">
          <div className="experience__card">
            <div className="experience__icon">
              <img src="https://icons-for-free.com/iconfiles/png/512/vscode+icons+type+typescript-1324451507894042344.png" alt="" />
            </div>
            <div className="experience__topic">TypeScript</div>
            <p>I was working with TS since I started working on project at WebActive. At first it was very restrictive but when you get used to it it's really handy and catches a lot of mistakes that you would probably made without static typing</p>
          </div>
          <div className="experience__card">
            <div className="experience__icon">
              <img src="https://mobx.js.org/img/mobx.png" alt="" />
            </div>
            <div className="experience__topic">Mobx</div>
            <p>MobX is really heplful when it comes to lists, which I did more than I can count. It's intuitive library and with help of Observer you can render things when they change.</p>
          </div>
          <div className="experience__card">
            <div className="experience__icon">
              <img src="https://logos-world.net/wp-content/uploads/2021/02/Trello-Symbol.png" alt="" />
            </div>
            <div className="experience__topic">Trello</div>
            <p>With usage of Trello I've learnt about controlling your workflow with kanban. It really helped me with estimating time that was required to complete task and list all requirements to finish it.</p>
          </div>
          <div className="experience__card">
            <div className="experience__icon">
              <img src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" alt="" />
            </div>
            <div className="experience__topic">Git</div>
            <p>I've completed course on Udemy for using Git but in my work I was using GitLab rather than GitHub that I've used for some private projects while I was doing side-projects to improve my skill.</p>
          </div>
          <div className="experience__card">
            <div className="experience__icon">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Ruby_logo.svg/1200px-Ruby_logo.svg.png" alt="" />
            </div>
            <div className="experience__topic">Ruby on Rails</div>
            <p>Biggest difficulty I've ever had while working was jumping between Frontend and Backend. On the Backend side I was using Ruby on Rails with Grape Framework basing my knowledge on existing code, help of Senior Developer and "Well-Grounded Rubyist".</p>
          </div>
          <div className="experience__card">
            <div className="experience__icon">
              <img src="https://img.icons8.com/cotton/452/grape.png" alt="" />
            </div>
            <div className="experience__topic">Grape</div>
            <p>While working with Grape I was building services ( which was kinda heavy ), lists and filters ( which was way easier ). I've also wrote some simple tests for those services using RSPEC which is great because of it's simplicity of syntax.</p>
          </div>
        </section>
      </div>
    </section>
  )
}