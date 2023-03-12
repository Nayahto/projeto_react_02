import "./login.css";
import { reqPostAuth } from "../../functions/axiosFunc";
import { useState } from "react";

function Login() {
  const [userCPF, setUserCPF] = useState("");
  const [passWord, setPassword] = useState("");
  const postBody = { userCPF, passWord };
  const url = "http://localhost:3001/auth";

  return (
    <>
      <div id="generalLoginPerson">
        <div id="paragrafoPerson">
          <h1>Nayahto store</h1>
          <p>quando o assunto é game nayahto store te entende</p>
          <h2>insira seus dados para o login. Caso seja novo cadastre-se</h2>
        </div>
        <div id="formPerson">
          <input
            type="text"
            onChange={(e) => {
              setUserCPF(e.target.value);
            }}
            placeholder="insira seu cpf"
          />
          <input
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="insira sua senha"
          />
          <div id="buttonPerson">
            <button
              onClick={() => {
                reqPostAuth(url, postBody);
              }}
            >
              Entrar
            </button>

            <button>
              <a href="/user/form/">Cadastrar</a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
