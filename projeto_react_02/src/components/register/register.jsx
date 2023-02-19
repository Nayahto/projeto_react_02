import "./register.css";

function Register() {
  return (
    <>
      <div id="generalRegisterPerson">
        <h1>insira seus dados</h1>
        <div id="registerPerson">
          <label htmlFor="">CPF</label>
          <input type="text" placeholder="insira seu cpf" />
          <label htmlFor="">Senha</label>
          <input type="password" placeholder="insira sua senha" />
          <label htmlFor="">Usuario</label>
          <input type="text" placeholder="insira nome de usuario" />
          <label htmlFor="">Email</label>
          <input type="text" placeholder="insira seu email" />
          <label htmlFor="">Tipo</label>
          <select name="tipo de usuario" id="">
            <option value="Admin">Administrador</option>
            <option value="Normal">Normal</option>
          </select>
        </div>
        <button>cadastrar</button>
      </div>
    </>
  );
}

export default Register;
