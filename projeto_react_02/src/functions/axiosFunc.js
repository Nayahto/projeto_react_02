import axios from "axios";

function handleSubmit(url, data, nav) {
  axios
    .post(url, data)
    .then((response) => console.log(response))
    .catch((error) => error);
  nav;
}

export { handleSubmit };
