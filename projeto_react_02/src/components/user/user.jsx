import { useEffect, useState } from "react";
import { reqGet } from "../../functions/axiosFunc";
import "./user.css";

export default function User() {
  const url = "http://localhost:3001/profile";
  const [resData, setResData] = useState([]);

  useEffect(() => {
    reqGet(url, setResData);
  }, []);
  console.log(resData);
  return (
    <>
      <div id="generalProfilePerson">
        <div id="headerPerson">
          <div id="linkPerson">
            <a href="/user/edit/id">Editar Usuario</a>
            <a href="/profile/form/id">novo perfil</a>
            <a href="user/genre/id">novo genero</a>
          </div>
          <div id="pesquisaPerson">
            <input type="text" placeholder="pesquisar" />
            <button>pesquisar</button>
          </div>
        </div>

        <div id="divProfilePerson">
          {resData.map((resDataArg) => {
            return (
              <div id="profilePerson" key={resDataArg.id}>
                <h3>{resDataArg.Title}</h3>
                <img src={resDataArg.ImageURL} alt="" />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
