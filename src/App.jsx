import logo from "./logo.svg";
import "./App.css";
import myProfilePic from "./assets/profile__pic.png";
import ShareIcon from "./assets/share__icon.svg"

function App() {
  return (
    <div className="App">
      <main>
        <div className="container">
          <div className="row">
            <section id="section__profile">
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
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
