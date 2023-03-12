import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import UserEdit from "./components/edit/userEdit/userEdit";
import GameEdit from "./components/edit/gameEdit/gameEdit";
import ProfileEdit from "./components/edit/profileEdit/profileEdit";

import UserForm from "./components/form/userForm/userForm";
import GameForm from "./components/form/gameForm/gameForm";
import ProfileForm from "./components/form/profileForm/profileForm";

import User from "./components/user/user";
import Game from "./components/game/game";
import GenreForm from "./components/form/genreForm/genreForm";
import Login from "./components/login/login";
import GameDetails from "./components/details/gameDetails";

function App() {
  return (
    <div className="App">
      <div id="userPerson"></div>

      <BrowserRouter>
        <Routes>
          <Route path={"/user"} element={<User />}></Route>
          <Route path={"/user/edit/:id"} element={<UserEdit />}></Route>
          <Route path={"/user/form/"} element={<UserForm />}></Route>
          <Route path={"/user/genre/:id"} element={<GenreForm />}></Route>

          <Route path={"/game"} element={<Game />}></Route>
          <Route path={"/game/edit/:id"} element={<GameEdit />}></Route>
          <Route path={"/game/form/"} element={<GameForm />}></Route>
          <Route path={"/game/details/:id"} element={<GameDetails />}></Route>

          <Route path={"/profile"} element={<UserEdit />}></Route>
          <Route path={"/profile/edit/:id"} element={<ProfileEdit />}></Route>
          <Route path={"/profile/form/:id"} element={<ProfileForm />}></Route>

          <Route path={"/login"} element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
