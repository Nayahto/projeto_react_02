import axios from "axios";
import { useEffect, useState } from "react";

function reqPost(url, data, nav) {
  axios
    .post(url, data)
    .then((response) => console.log(response))
    .catch((error) => error);
  nav;
}

function reqGet(url) {
  const [dataBody, setDataBody] = useState([]);
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        const responseSjon = JSON.stringify(response.data);
        setDataBody(responseSjon);
        console.log(dataBody);
      })
      .catch((error) => {
        console.log(error);
      });
  }),
    [];
  return [dataBody];
}

export { reqPost, reqGet };
