import { useEffect, useState } from "react";
import { reqGet } from "../../functions/axiosFunc";
import "./user.css";

export default function User() {
  const url = "http://localhost:3001/profile";
  const [cadastrado, setCadastrado] = useState(false);
  const [pendente, setPendente] = useState(true);
  const [erro, setErro] = useState(false);
  const [resData, setResData] = useState([]);

  useEffect(() => {
    reqGet(url, setResData, setPendente, setErro);
  }, []);
  console.log(resData);
  return (
    <>
      <div id="generalProfilePerson">
        <div id="headerPerson">
          <div id="linkPerson">
            <a href="user/edit/id">Editar Usuario</a>
            <a href="profile/form">Novo Perfil</a>
            <a href="genre/form">Novo Genero</a>
            <a href="game/form">Novo Jogo</a>
            <a href="user/game">Jogos</a>
          </div>
          <div id="pesquisaPerson">
            <input type="text" placeholder="pesquisar" />
            <button>Pesquisar</button>
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
            <h2>jogo nao cadastrado</h2>
          </div>
        )}

        <div id="divProfilePerson">
          {resData.map((resDataArg) => {
            return (
              <div id="profilePerson" key={resDataArg.id}>
                <h3>{resDataArg.Title}</h3>
                <h3>{resDataArg.id}</h3>
                <img src={resDataArg.ImageURL} alt="" />
                <a href={"profile/" + resDataArg.id}>ver jogos</a>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
