import axios from "axios";

function reqPost(url, data, nav) {
  axios
    .post(url, data)
    .then((response) => console.log(response.data))
    .catch((error) => console.log(error));
  nav;
}

function reqGet(url, setData, setPendente, setErro, setCadastrado) {
  axios
    .get(url)
    .then((response) => {
      const responseJson = response;
      setPendente(false);
      if (responseJson.data.length == 0) {
        setCadastrado(true);
      }
      return setData(responseJson.data);
    })
    .catch((error) => {
      console.log(error);
      return setErro(true), setPendente(false);
    });
}

function reqPatch(url, sendData) {
  axios
    .patch(url, sendData)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
}

function reqDelete(url) {
  axios
    .delete(url)
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.log(error);
    });
}
function reqPostAuth(url, data) {
  axios
    .post(url, data)
    .then((response) => {
      const idRes = response.data.user.id;
      console.log(idRes);
    })
    .catch((error) => console.log(error));
}
function reqGetFav(url, setData, setGameIdGet) {
  axios
    .get(url)
    .then((response) => {
      const responseJson = response.data;
      setGameIdGet(true);
      setData(responseJson.favorite[0].id);
    })
    .catch((error) => {
      console.log(error);
    });
}
function favorite(url) {
  axios
    .get(url)
    .then((response) => {
      const responseJson = response.data;
      console.log(responseJson);
    })
    .catch((error) => {
      console.log(error);
    });
}

export {
  reqPost,
  reqGet,
  reqPatch,
  reqDelete,
  reqPostAuth,
  reqGetFav,
  favorite,
};
