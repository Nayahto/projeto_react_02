import "./favorite.css";
import { favorite, reqGetFav } from "../../functions/axiosFunc";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Favorite() {
  const [resData, setResData] = useState([]);
  const { id } = useParams();
  const id2 = resData;
  const url = "http://localhost:3001/profile/" + id;
  const FavUrl = "http://localhost:3001/favorite/" + id2;
  const [cadastrado, setCadastrado] = useState(false);
  const [pendente, setPendente] = useState(true);
  const [erro, setErro] = useState(false);
  const [resDataFav, setResDataFav] = useState([]);
  const [gameIdGet, setGameIdGet] = useState(false);

  useEffect(() => {
    reqGetFav(url, setResData);
    favorite(FavUrl);
  }, []);
  return (
    <>
      <div id="generalFavPerson">
        <div id="favPerson"></div>
      </div>
    </>
  );
}
