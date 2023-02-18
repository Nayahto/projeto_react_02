import "./register.css";

function Register() {
  return (
    <>
      <div id="generalPerson">
        <h1>insira seus dados</h1>
        <div id="registerPerson">
          <label htmlFor="">CPF:</label>
          <input type="text" placeholder="insira seu cpf" />
          <label htmlFor="">Senha:</label>
          <input type="text" placeholder="insira sua senha" />
          <label htmlFor="">Usuario:</label>
          <input type="text" placeholder="insira nome de usuario" />
          <label htmlFor="">Email:</label>
          <input type="text" placeholder="insira seu email" />
          <label htmlFor="">Usuario:</label>
          <input type="text" placeholder="insira o tipo de usuario" />
        </div>
        <button>cadastrar</button>
      </div>
    </>
  );
}

export default Register;
