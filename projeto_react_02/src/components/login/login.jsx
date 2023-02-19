import "./login.css";

function Login() {
  return (
    <>
      <div id="generalLoginPerson">
        <div id="paragrafoPerson">
          <h1>Nayahto store</h1>
          <p>quando o assunto é game nayahto store te entende</p>
          <h2>insira seus dados para o login. Caso seja novo cadastre-se</h2>
        </div>
        <div id="formPerson">
          <input type="text" placeholder="insira seu cpf" />
          <input type="password" placeholder="insira sua senha" />
          <div id="buttonPerson">
            <button> Entrar</button>
            <button>
              <a href="/register">Cadastrar</a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
