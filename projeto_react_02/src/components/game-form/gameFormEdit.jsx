import "./gameForm.css";
import { reqPatch, reqGet } from "../../functions/axiosFunc";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function GameFormEdit() {
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
  const [resData, setResData] = useState([]);
  const { id } = useParams();
  const url = "http://localhost:3002/game/" + id;

  useEffect(() => {
    reqGet(url, setResData);
  }, []);

  const nav = useNavigate();
  const navFunc = () => {
    return nav("/game");
  };

  const { title, seValuetTitle } = useState(resData);

  console.log(seValuetTitle);

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
              reqPatch(url, postBody, navFunc());
            }}
          >
            Salvar
          </button>
        </div>
      </div>
    </>
  );
}
