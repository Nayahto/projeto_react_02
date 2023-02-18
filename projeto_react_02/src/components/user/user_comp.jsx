import "./user_comp.css";
import gameGenre from "../img/gameGenre.png";
import games from "../img/games.png";
import profile from "../img/profile.png";
import user from "../img/user.png";
function User() {
  return (
    <>
      <div id="userPerson">
        <div className="linkPerson">
          <a href="">
            <img src={user} alt="teste" />
          </a>
        </div>
        <div className="linkPerson">
          <a href="">
            <img src={profile} alt="teste" />
          </a>
        </div>
        <div className="linkPerson">
          <a href="">
            <img src={games} alt="teste" />
          </a>
        </div>
        <div className="linkPerson">
          <a href="">
            <img src={gameGenre} alt="teste" />
          </a>
        </div>
      </div>
    </>
  );
}

export default User;
