import "./game.css";
import { reqGet } from "../../functions/axiosFunc";

function Game() {
  reqGet("http://localhost:3002/game");
  return (
    <>
      <div id="generalGamePerson">
        <div id="headerPerson">
          <div id="linkPerson">
            <a href="game/new">novo jogo</a>
            <a href="/">pagina inicial</a>
          </div>
          <div id="pesquisaPerson">
            <input type="text" placeholder="pesquisar" />
            <button>pesquisar</button>
          </div>
          <div></div>
        </div>

        <div id="gamesPerson"></div>
      </div>
    </>
  );
}
export default Game;
