import logo from "./logo.svg";
import "./App.css";
import myProfilePic from "./assets/profile__pic.png";
import ShareIcon from "./assets/share__icon.svg";
import slack from "./assets/slack.svg"
import github from "./assets/github.svg"
import zuri from "./assets/zuri_logo.svg"
import ingress from "./assets/Ingressive.svg"

function App() {
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
                    <img src={ShareIcon} alt="Share__button" />
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
                  <button className="link__btn btn__last" id="book__design">Design Books</button>
                </a>
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
      <footer>
        <div className="footer__container">
          <div className="footer__row">
            <div className="footer__wrapper">
            <img src={zuri} alt="" />
            <p>HNG Internship 9 Frontend Task</p>
            <img src={ingress} alt="" />
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default App;
