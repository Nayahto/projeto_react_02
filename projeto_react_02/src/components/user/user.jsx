export default function User() {
  return (
    <>
      <div id="generalUserPerson">
        <div id="headerPerson">
          <div id="linkPerson">
            <a href="/User/new">novo perfil</a>
            <a href="/">pagina inicial</a>
          </div>
          <div id="pesquisaPerson">
            <input type="text" placeholder="pesquisar" />
            <button>pesquisar</button>
          </div>
        </div>

        <div id="UserPerson"></div>
      </div>
    </>
  );
}
