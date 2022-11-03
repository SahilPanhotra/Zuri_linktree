import "./Home.css";
import myProfilePic from "../assets/profile__pic.jpg";
import ShareIcon from "../assets/share__icon.svg";
import slack from "../assets/slack.svg"
import github from "../assets/github.svg"
import hamBurger from "../assets/hamburger.svg"
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="App">
      <main>
        <div className="container">
          <div className="row">
            <section id="profile">
              <div className="profile__container">
                <figure className="profile__img--mask">
                  <img id="profile__img" src={myProfilePic} alt="" />
                </figure>
                <h2 className="profile__name">Sahil Panhotra</h2>
                <div className="button__wrapper">
                  <button className="button__share">
                    <img className="share" src={ShareIcon} alt="Share__button" />
                    <img className="hamburger" src={hamBurger} alt="Hamburger Menu" />
                  </button>
                </div>
              </div>
            </section>
            <section id="links">
              <div className="links__wrapper">
                <div className="link">
                <a href="https://twitter.com/sahilpanhotra" target="_blank">
                  <button className="link__btn " id="twitter">Twitter Link</button>
                </a>
                </div>
                <div id="slack" className="link">
                <a href="https://slack.com/sahilpanhotra" target="_blank">
                  <button className="link__btn">Slack</button>
                </a>
                </div>
                <div className="link">
                <a href="https://training.zuri.team/" target="_blank">
                  <button className="link__btn" id="btn__zuri">Zuri Team</button>
                </a>
                </div>
                <div className="link">
                <a href="http://books.zuri.team/" target="_blank">
                  <button className="link__btn" id="books">Zuri Books</button>
                </a>
                </div>
                <div className="link">
                <a href="https://books.zuri.team/python-for-beginners?ref_id=sahilpanhotra" target="_blank">
                  <button className="link__btn" id="book__python">Python Books</button>
                </a>
                </div>
                <div className="link">
                <a href="https://background.zuri.team/" target="_blank">
                  <button className="link__btn" id="pitch">BackGround Check for Coders</button>
                </a>
                </div>
                <div className="link">
                <a href="https://books.zuri.team/design-rules" target="_blank">
                  <button className="link__btn" id="book__design">Design Books</button>
                </a>
                </div>
                <div className="link">
                <Link to="/contact">
                  <button className="link__btn" id="contact">Contact Me</button>
                </Link>
                </div>
              </div>
            </section>
            <section id="social">
              <div className="social__wrapper">
                  <a href="https://slack.com/sahilpanhotra" target="_blank"><img src={slack} alt="Slack" /></a>
                  <a href="https://github.com/sahilpanhotra" target="_blank" className="github__icon"><img src={github} alt="Github" /></a>
              </div>  
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
