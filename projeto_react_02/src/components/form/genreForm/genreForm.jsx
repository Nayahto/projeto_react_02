import "./genreForm.css";
import { reqGet, reqPost } from "../../../functions/axiosFunc";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function GenreForm() {
  const nav = useNavigate();
  const [cadastrado, setCadastrado] = useState(false);
  const [pendente, setPendente] = useState(true);
  const [erro, setErro] = useState(false);
  const [resData, setResData] = useState([]);
  const url = "http://localhost:3001/game";
  const postUrl = "http://localhost:3001/genre";

  const [Name, setName] = useState("");
  const [gameId, setGameId] = useState([]);
  const genreData = { Name, gameId };
  useEffect(() => {
    reqGet(url, setResData, setPendente, setErro, setCadastrado);
  }, []);

  function handleValue(event) {
    const { value, checked } = event.target;
    console.log(value + " is " + checked);
    if (checked) {
      setGameId((gameIdArg) => [...gameIdArg, value]);
    } else {
      setGameId((gameIdArg) => {
        return [...gameIdArg.filter((gameIdArg) => gameIdArg !== value)];
      });
    }
  }
  const navFunc = () => {
    return nav("/user");
  };
  return (
    <>
      <div id="backgroundPerson">
        <div id="genreGeneralPerson">
          <div id="genrePerson">
            <label htmlFor="">genero</label>
            <input
              onChange={(e) => {
                setName(e.target.value);
              }}
              type="text"
              placeholder="insira o nome do genero"
            />
          </div>
          <label id="labelPerson" htmlFor="">
            selecionar jogos
          </label>
          {resData.map((resDataArg) => {
            return (
              <div id="boxPerson" key={resDataArg.id}>
                <label htmlFor="">
                  <input
                    onChange={handleValue}
                    type="checkbox"
                    value={resDataArg.id}
                  />
                  {resDataArg.Title}
                </label>
              </div>
            );
          })}
          <button
            onClick={() => {
              reqPost(postUrl, genreData, navFunc());
            }}
          >
            cadastrar
          </button>
        </div>
      </div>
    </>
  );
}
