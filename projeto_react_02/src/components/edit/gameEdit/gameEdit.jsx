import "./gameEdit.css";
import { reqPatch, reqDelete } from "../../../functions/axiosFunc";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

export default function GameEdit() {
  const { id } = useParams();
  const url = "http://localhost:3001/game/" + id;

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
          <label htmlFor="">Capa</label>
          <input
            onChange={(e) => {
              setCoverImageUrl(e.target.value);
            }}
            placeholder="insira a capa"
            type="text"
          />
          <label htmlFor="">Descricao</label>
          <input
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            placeholder="insira a descricao"
            type="text"
          />
          <label htmlFor="">Ano</label>
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
          <label htmlFor="">Trailer</label>
          <input
            onChange={(e) => {
              setTrailerYouTubeUrl(e.target.value);
            }}
            placeholder="insira o link do trailer"
            type="text"
          />
          <label htmlFor="">Gameplay</label>
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
              reqPatch(url, postBody, navFunc());
            }}
          >
            Enviar
          </button>
          <button
            onClick={() => {
              reqDelete(url, navFunc());
            }}
          >
            apagar
          </button>
        </div>
      </div>
    </>
  );
}
