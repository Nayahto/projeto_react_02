import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { reqGet } from "../../functions/axiosFunc";

function GameDetails() {
  const { id } = useParams();
  const url = "http://localhost:3001/game/" + id;
  const [resData, setResData] = useState([]);

  useEffect(() => {
    reqGet(url, setResData);
  }, []);
  console.log(resData);
  return (
    <>
      <div id="bodyGameDetailsPerson">
        <a id="bodyGameDetailsAnchor" href="/game">
          home
        </a>
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
            <button>
              <a href={"/game/edit/" + resData.id}>Editar</a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default GameDetails;
