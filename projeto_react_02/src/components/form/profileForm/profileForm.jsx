import "./profileForm.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { reqPost } from "../../../functions/axiosFunc";

export default function ProfileForm() {
  const [Title, setTitle] = useState("");
  const [ImageURL, setImageURL] = useState("");
  const postBody = { Title, ImageURL };
  const url = "http://localhost:3001/profile";
  const nav = useNavigate();
  const navFunc = () => {
    return nav("/user");
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
              reqPost(url, postBody, navFunc());
            }}
          >
            cadastrar
          </button>
        </div>
      </div>
    </>
  );
}
