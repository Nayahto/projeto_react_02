import "./game.css";

function Game() {
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
        </div>

        <div id="gamesPerson"></div>
      </div>
    </>
  );
}
export default Game;
