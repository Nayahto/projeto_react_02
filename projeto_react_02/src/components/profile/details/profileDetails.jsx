import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { reqGet } from "../../../functions/axiosFunc";

export default function ProfileDetails() {
  const [cadastrado, setCadastrado] = useState(false);
  const [pendente, setPendente] = useState(true);
  const [erro, setErro] = useState(false);
  const { id } = useParams();
  const url = "http://localhost:3001/game/" + id;
  const [resData, setResData] = useState([]);

  useEffect(() => {
    reqGet(url, setResData, setPendente, setErro, setCadastrado);
  }, []);
  console.log(resData);
  return (
    <>
      <div id="bodyGameDetailsPerson">
        <a id="bodyGameDetailsAnchor" href="/game">
          home
        </a>
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
        <div id="bodyGameDetails">
          <div id="bodyGameDetailsImg">
            <img src={resData.CoverImageUrl} alt="" />
          </div>
          <div id="bodyGameDetailsPara">
            <p>Titulo: {resData.Title}</p>
            <p>Descricao: {resData.Description}</p>
            <p> lancamento: {resData.Year}</p>
            <p>ImdbScore: {resData.ImdbScore}</p>
            <a target="blank" href={resData.GameplayYouTubeUrl}>
              Gameplay
            </a>
            <a target="blank" href={resData.TrailerYouTubeUrl}>
              Trailer
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
