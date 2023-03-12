import "./gameForm.css";
import { reqPost } from "../../../functions/axiosFunc";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function GameForm() {
  const [Title, setTitle] = useState("");
  const [CoverImageUrl, setCoverImageUrl] = useState("");
  const [Description, setDescription] = useState("");
  const [convYear, setYear] = useState("");
  const Year = parseInt(convYear);
  const [convImdbScore, setImdbScore] = useState("");
  const ImdbScore = parseFloat(convImdbScore);
  const [TrailerYouTubeUrl, setTrailerYouTubeUrl] = useState("");
  const [GameplayYouTubeUrl, setGameplayYouTubeUrl] = useState("");
  const postBody = {
    Title,
    CoverImageUrl,
    Description,
    Year,
    ImdbScore,
    TrailerYouTubeUrl,
    GameplayYouTubeUrl,
  };
  const url = "http://localhost:3001/game";
  const nav = useNavigate();
  const navFunc = () => {
    return nav("/game");
  };
  return (
    <>
      <div id="gameFormPerson">
        <div id="labelInputPerson">
          <label htmlFor="">titulo</label>
          <input
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            placeholder="insira o titulo"
            type="text"
          />
          <label htmlFor="">capa</label>
          <input
            onChange={(e) => {
              setCoverImageUrl(e.target.value);
            }}
            placeholder="insira a capa"
            type="text"
          />
          <label htmlFor="">descricao</label>
          <input
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            placeholder="insira a descricao"
            type="text"
          />
          <label htmlFor="">ano</label>
          <input
            onChange={(e) => {
              setYear(e.target.value);
            }}
            placeholder="insira o ano"
            type="text"
          />
          <label htmlFor="">Imdb</label>
          <input
            onChange={(e) => {
              setImdbScore(e.target.value);
            }}
            placeholder="insira uma pontuacao de 0 até 5"
            type="text"
          />
          <label htmlFor="">trailer</label>
          <input
            onChange={(e) => {
              setTrailerYouTubeUrl(e.target.value);
            }}
            placeholder="insira o link do trailer"
            type="text"
          />
          <label htmlFor="">gameplay</label>
          <input
            onChange={(e) => {
              setGameplayYouTubeUrl(e.target.value);
            }}
            placeholder="insira um link com gameplay"
            type="text"
          />
        </div>
        <div id="buttonFormPerson">
          <button
            onClick={() => {
              reqPost(url, postBody, navFunc());
            }}
          >
            Cadastrar jogo
          </button>
        </div>
      </div>
    </>
  );
}
