import "./game.css";
import { useState, useEffect } from "react";
import { reqGet } from "../../functions/axiosFunc";

function Game() {
  const [pendente, setPendente] = useState(true);
  const [erro, setErro] = useState(false);
  const [resData, setResData] = useState([]);
  const [cadastrado, setCadastrado] = useState(false);
  const url = "http://localhost:3001/game";

  useEffect(() => {
    reqGet(url, setResData, setPendente, setErro, setCadastrado);
  }, []);

  console.log(resData);
  return (
    <>
      <div id="generalGamePerson">
        <div id="headerPerson">
          <div id="linkPerson">
            <a href="/user">pagina inicial</a>
          </div>
          <div id="pesquisaPerson">
            <input type="text" placeholder="pesquisar" />
            <button>pesquisar</button>
          </div>
        </div>

        {pendente && (
          <div>
            <h2>carregando...</h2>
          </div>
        )}
        {erro && (
          <div>
            <h2>erro na consulta</h2>
          </div>
        )}
        {cadastrado && (
          <div>
            <h2>não existe jogo cadastrado</h2>
          </div>
        )}
        <div id="gamesPerson">
          {resData.map((resDataArg) => {
            return (
              <div id="gameBody" key={resDataArg.id}>
                <h3>{resDataArg.Title}</h3>
                <img src={resDataArg.CoverImageUrl} alt="teste de legenda" />
                <p>IMDb: {resDataArg.ImdbScore}</p>
                <p>Ano: {resDataArg.Year}</p>
                <button>
                  <a href={"/game/details/" + resDataArg.id}>ver mais</a>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
export default Game;
