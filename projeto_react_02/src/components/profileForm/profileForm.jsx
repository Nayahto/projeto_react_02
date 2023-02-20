import "./profileForm.css";

export default function ProfileForm() {
  return (
    <>
      <div id="ProfilegeneralPerson">
        <div id="profileFieldsPerson">
          <label htmlFor="">nome do perfil</label>
          <input type="text" placeholder="insira um nome para o seu perfil" />
          <label htmlFor="">foto de capa</label>
          <input type="text" placeholder="insira um link para a capa" />
        </div>
        <div id="buttonProfilePerson">
          <button>cadastrar</button>
        </div>
      </div>
    </>
  );
}
