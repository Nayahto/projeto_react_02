import axios from "axios";

function reqPost(url, data, nav) {
  axios
    .post(url, data)
    .then((response) => console.log(response.data))
    .catch((error) => console.log(error));
  nav;
}

function reqGet(url, setData) {
  axios
    .get(url)
    .then((response) => {
      const responseJson = response;
      return setData(responseJson.data);
    })
    .catch((error) => {
      console.log(error);
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

export { reqPost, reqGet, reqPatch, reqDelete, reqPostAuth };
