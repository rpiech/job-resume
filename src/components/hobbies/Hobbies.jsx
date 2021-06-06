import "./hobbies.scss"
import { Link } from 'react-router-dom'

export default function Hobbies() {
  return (
    <section className="hobby" id="hobby">
      <div className="hobby__content container container--pall">
        <h2>My hobbies</h2>
        <section className="hobby__grid">
          <article className="hobby__item">
            <div className="hobby__image" style={{backgroundImage: `url('https://images.wsj.net/im-181062?width=1280&size=1')`}}></div>
            <div className="hobby__text">
              <div className="hobby__heading">Basketball</div>
              <h3 className="hobby__title">Playing basketball and watching NBA</h3>
              <p className="hobby__description">is one of my biggest hobbies since I was 12. Playing helps you to stay in shape and while watching NBA you can improve your language skills.</p>
            </div>
          </article>
          <article className="hobby__item">
            <div className="hobby__image" style={{backgroundImage: `url('https://www.reviewgeek.com/p/uploads/2021/02/502f42ff.png?width=1200')`}}></div>
            <div className="hobby__text">
              <div className="hobby__heading">Tabletop RPGs</div>
              <h3 className="hobby__title">are great way to develop soft skills</h3>
              <p className="hobby__description">and quick thinking. 3 years ago my friend got me into it and it's an really great way to spend your time. You have to talk a lot and think fast in certain types of situations.</p>
            </div>
          </article>
          <article className="hobby__item">
            <div className="hobby__image" style={{backgroundImage: `url('https://www.cael.ca/wp-content/uploads/2020/11/106116.jpg')`}}></div>
            <div className="hobby__text">
              <div className="hobby__heading">Reading</div>
              <h3 className="hobby__title">can broaden your horizons</h3>
              <p className="hobby__description">and help you learn new things, you can improve your english, imagination and learn new things by reading</p>
            </div>
          </article>
          <article className="hobby__item">
            <div className="hobby__image" style={{backgroundImage: `url('https://media-exp1.licdn.com/dms/image/C511BAQGoML601ziPig/company-background_10000/0/1571114000790?e=2159024400&v=beta&t=l-DI-u4XNkGgTFqXcGQbG_ozBJlIPqkFvqlN3RNv_YQ')`}}></div>
            <div className="hobby__text">
              <div className="hobby__heading">Gym</div>
              <h3 className="hobby__title">is great for staying in shape and keep yourself motivated.</h3>
              <p className="hobby__description">Sadly because of the pandemic my membership was frozen but I'm looking forward to return to it when whole situation is resolved.</p>
            </div>
          </article>
        </section>
        <div className="hobby__game">
          <p>If you're already bored with my resume:</p>
          <Link to="/game">
            <div className="hobby__cta">
              <a className="button">Check this cool game I've made</a>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}