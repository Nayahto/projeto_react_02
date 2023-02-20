import axios from "axios";

function reqPost(url, data, nav) {
  axios
    .post(url, data)
    .then((response) => console.log(response))
    .catch((error) => error);
  nav;
}

export { reqPost };
