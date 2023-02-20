import "./home.css";
import gameGenre from "../img/gameGenre.png";
import games from "../img/games.png";
import profile from "../img/profile.png";
import user from "../img/user.png";

function Home() {
  return (
    <>
      <div id="generalUserPerson">
        <div id="userPerson">
          <div id="linkPersonUser">
            <a href="">
              <img src={user} alt="teste" />
            </a>
          </div>
          <div id="linkPersonProfile">
            <a href="/profile">
              <img src={profile} alt="teste" />
            </a>
          </div>
          <div id="linkPersonGame">
            <a href="/game">
              <img src={games} alt="teste" />
            </a>
          </div>
          <div id="linkPersonGenre">
            <a href="">
              <img src={gameGenre} alt="teste" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
