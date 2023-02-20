import "./profile.css";

function Profile() {
  return (
    <>
      <div id="generalProfilePerson">
        <div id="headerPerson">
          <div id="linkPerson">
            <a href="/profile/new">novo perfil</a>
            <a href="/">pagina inicial</a>
          </div>
          <div id="pesquisaPerson">
            <input type="text" placeholder="pesquisar" />
            <button>pesquisar</button>
          </div>
        </div>

        <div id="profilePerson"></div>
      </div>
    </>
  );
}
export default Profile;
