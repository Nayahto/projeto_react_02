import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { reqGet, reqPost } from "../../../functions/axiosFunc";
import "./favoriteForm.css";
export default function FavoriteForm() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const profileId = id;
  const [gameId, setGameId] = useState([]);
  const url = "http://localhost:3001/game";
  const favUrl = "http://localhost:3001/favorite";
  const favoriteBody = { profileId, gameId };
  const nav = useNavigate();

  const [cadastrado, setCadastrado] = useState(false);
  const [pendente, setPendente] = useState(true);
  const [erro, setErro] = useState(false);
  const arrtest = [];

  const navFunc = () => {
    return nav("/user");
  };

  useEffect(() => {
    reqGet(url, setData, setPendente, setErro, setCadastrado);
  }, []);

  function handleInput(e) {
    const { value, checked } = e.target;
    if (checked) {
      setGameId((pre) => [...pre, value]);
    } else {
      setGameId((pre) => {
        return [...pre.filter((skill) => skill !== value)];
      });
    }
  }

  console.log(gameId);
  return (
    <>
      <div id="favoriteGeneralPerson">
        <div id="favoritePerson">
          {data.map((resDataArg) => {
            return (
              <div id="favoriteInputPerson" key={resDataArg.id}>
                <label htmlFor="">{resDataArg.Title}</label>
                <input
                  onChange={handleInput}
                  type="checkbox"
                  value={resDataArg.id}
                />
              </div>
            );
          })}
          <div id="favoriteButtonPerson">
            <button
              onClick={() => {
                reqPost(favUrl, favoriteBody, navFunc());
              }}
            >
              Favoritar
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
