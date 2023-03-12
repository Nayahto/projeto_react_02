import "./profileEdit.css";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { reqDelete, reqPatch } from "../../../functions/axiosFunc";

export default function ProfileEdit() {
  const { id } = useParams();
  const url = "http://localhost:3001/profile/" + id;
  const [Title, setTitle] = useState("");
  const [ImageURL, setImageURL] = useState("");
  const patchBody = { Title, ImageURL };

  const nav = useNavigate();
  const navFunc = () => {
    return nav("/user");

    /*--------------------------------------------------------------------------------------------------------- */
  };

  return (
    <>
      <div id="ProfilegeneralPerson">
        <div id="profileFieldsPerson">
          <label htmlFor="">nome do perfil</label>
          <input
            type="text"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            placeholder="insira um nome para o seu perfil"
          />
          <label htmlFor="">foto de capa</label>
          <input
            type="text"
            onChange={(e) => {
              setImageURL(e.target.value);
            }}
            placeholder="insira um link para a capa"
          />
        </div>
        <div id="buttonProfilePerson">
          <button
            onClick={() => {
              reqPatch(url, patchBody, navFunc());
            }}
          >
            Enviar
          </button>
          <button
            onClick={() => {
              reqDelete(url, navFunc());
            }}
          >
            Apagar
          </button>
        </div>
      </div>
    </>
  );
}
