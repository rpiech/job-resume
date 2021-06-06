import "./info.scss";
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import HomeIcon from '@material-ui/icons/Home';
import { Link } from 'react-router-dom'

export default function Info() {
  return (
    <section className="info" id="info">
      <h2 className="info__topic">Contact</h2>
      <div className="info__container">
        <div className="info__image"></div>
        <article className="info__text info__container--pall">
          <h3>Personal Info</h3>
          <p>I'm Rafał Piech, 22 years old from Warsaw, Poland. I've been programming for over a year now both frontend and backend with main focus on frontend side. I love to see my impact on projects and knowing that people will use something that I made is pretty exciting.</p>
          <ul className="info__list">
            <li>
              <a className="info__list--item">
                <span className="info__icon"><EmailIcon/></span>
                <span>piech.rp@gmail.com</span>
              </a>
            </li>
            <li>
              <a className="info__list--item"className="info__list--item">
                <span className="info__icon"><PhoneIcon/></span>
                <span>+48 500 741 220</span>
              </a>
            </li>
            <li>
              <a className="info__list--item">
                <span className="info__icon"><HomeIcon/></span>
                <span>Warsaw, Poland</span>
              </a>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}