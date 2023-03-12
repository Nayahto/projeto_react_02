import "./userForm.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { reqPost } from "../../../functions/axiosFunc";

export default function userForm() {
  const [CPF, setCPF] = useState("");
  const [Password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const postBody = { CPF, Password, userName, email, role };
  const url = "http://localhost:3001/user";
  const nav = useNavigate();
  const navFunc = () => {
    return nav("/login");
  };
  return (
    <>
      <div id="generalRegisterPerson">
        <h1>insira seus dados</h1>
        <div id="registerPerson">
          <label htmlFor="">CPF</label>
          <input
            type="text"
            onChange={(e) => {
              setCPF(e.target.value);
            }}
            placeholder="insira seu cpf"
          />

          <label htmlFor="">Senha</label>
          <input
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="insira sua senha"
          />

          <label htmlFor="">Usuario</label>
          <input
            type="text"
            onChange={(e) => {
              setUserName(e.target.value);
            }}
            placeholder="insira nome de usuario"
          />

          <label htmlFor="">Email</label>
          <input
            type="text"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="insira seu email"
          />

          <label htmlFor="">Tipo</label>
          <select
            onChange={(e) => {
              setRole(e.target.value);
            }}
            name="tipo de usuario"
          >
            <option value="">Selecionar:</option>
            <option value="Admin">Administrador</option>
            <option value="Normal">Normal</option>
          </select>
        </div>
        <button
          onClick={() => {
            reqPost(url, postBody, navFunc());
          }}
        >
          cadastrar
        </button>
      </div>
    </>
  );
}
