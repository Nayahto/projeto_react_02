import "./login.css";

function Login() {
  return (
    <>
      <div id="generalPerson">
        <div id="paragrafoPerson">
          <h1>Nayahto store</h1>
          <p>quando o assunto é game nayahto store te entende</p>
          <h2>insira seus dados para o login e caso seja novo cadastre-se</h2>
        </div>
        <div id="formPerson">
          <input type="text" placeholder="insira seu cpf" />
          <input type="password" placeholder="insira sua senha" />
          <button> enviar</button>
          <button>cadastrar</button>
        </div>
      </div>
    </>
  );
}

export default Login;
