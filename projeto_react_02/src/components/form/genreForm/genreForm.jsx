import "./genreForm.css";
import { reqGet, reqPost } from "../../../functions/axiosFunc";
import { useState } from "react";
import { useEffect } from "react";

export default function GenreForm() {
  const [resData, setResData] = useState([]);
  const url = "http://localhost:3001/game";
  useEffect(() => {
    reqGet(url, setResData);
  }, []);
  console.log(resData);
  return (
    <>
      <div id="backgroundPerson">
        <div id="genreGeneralPerson">
          <div id="genrePerson">
            <label htmlFor="">genero</label>
            <input type="text" placeholder="insira o nome do genero" />
          </div>
          <label id="labelPerson" htmlFor="">
            selecionar jogos
          </label>
          {resData.map((resDataArg) => {
            return (
              <div id="boxPerson" key={resDataArg.id}>
                <label htmlFor="">
                  <input type="checkbox" value={resDataArg.id} />
                  {resDataArg.Title}
                </label>
              </div>
            );
          })}
          <button
            onClick={() => {
              reqPost(url);
            }}
          >
            cadastrar
          </button>
        </div>
      </div>
    </>
  );
}
