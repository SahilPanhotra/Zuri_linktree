import logo from "./logo.svg";
import "./App.css";
import myProfilePic from "./assets/profile__pic.png";

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
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
