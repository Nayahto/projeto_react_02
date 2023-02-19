import "./gameForm.css";

export default function GameForm() {
  return (
    <>
      <div id="gameFormPerson">
        <div id="labelInputPerson">
          <label htmlFor="">titulo</label>
          <input placeholder="insira o titulo" type="text" />
          <label htmlFor="">capa</label>
          <input placeholder="insira a capa" type="text" />
          <label htmlFor="">descricao</label>
          <input placeholder="insira a descricao" type="text" />
          <label htmlFor="">ano</label>
          <input placeholder="insira o ano" type="text" />
          <label htmlFor="">Imdb</label>
          <input placeholder="insira uma pontuacao de 0 até 5" type="text" />
          <label htmlFor="">trailer</label>
          <input placeholder="insira o link do trailer" type="text" />
          <label htmlFor="">gameplay</label>
          <input placeholder="insira um link com gameplay" type="text" />
        </div>
        <div id="buttonFormPerson">
          <button>Cadastrar jogo</button>
        </div>
      </div>
    </>
  );
}
