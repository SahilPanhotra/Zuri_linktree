import logo from "./logo.svg";
import "./App.css";
import myProfilePic from "./assets/profile__pic.png";
import ShareIcon from "./assets/share__icon.svg";

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
                <a className="link" href="https://twitter.com/sahilpanhotra" target="_blank">
                  <button className="link__btn " id="twitter">Twitter Link</button>
                </a>
                <a className="link" href="https://slack.com/sahilpanhotra" target="_blank">
                  <button className="link__btn" id="slack">Slack</button>
                </a>
                <a className="link" href="https://training.zuri.team/" target="_blank">
                  <button className="link__btn" id="btn__zuri">Zuri Team</button>
                </a>
                <a className="link" href="http://books.zuri.team/" target="_blank">
                  <button className="link__btn" id="books">Zuri Books</button>
                </a>
                <a className="link" href="https://books.zuri.team/python-for-beginners?ref_id=sahilpanhotra" target="_blank">
                  <button className="link__btn" id="book__python">Python Books</button>
                </a>
                <a className="link" href="https://background.zuri.team/" target="_blank">
                  <button className="link__btn" id="pitch">BackGround Check for Coders</button>
                </a>
                <a className="link" href="https://books.zuri.team/design-rules" target="_blank">
                  <button className="link__btn btn__last" id="book__design">Design Books</button>
                </a>
              </div>
            </section>
            <section id="social"></section>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
