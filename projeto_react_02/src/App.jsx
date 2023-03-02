import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./components/profile/profile";
import Game from "./components/game/game";
import Home from "./components/home/home";
import Login from "./components/login/login";
import Register from "./components/register/register";
import GameForm from "./components/game-form/gameFrom";
import ProfileForm from "./components/profileForm/profileForm.jsx";
import GameDetails from "./components/game/gameDetails";
import GameFormEdit from "./components/game-form/gameFormEdit";
import User from "./components/user/user";

function App() {
  return (
    <div className="App">
      <div id="userPerson"></div>

      <BrowserRouter>
        <Routes>
          <Route path={"/profile"} element={<Profile />}></Route>
          <Route path={"/game"} element={<Game />}></Route>
          <Route path={"/"} element={<Home />}></Route>
          <Route path={"/login"} element={<Login />}></Route>
          <Route path={"/register"} element={<Register />}></Route>
          <Route path={"/game/new"} element={<GameForm />}></Route>
          <Route path={"/game/:id"} element={<GameDetails />}></Route>
          <Route path={"/profile/new"} element={<ProfileForm />}></Route>
          <Route path={"/edit/:id"} element={<GameFormEdit />}></Route>
          <Route path={"/user"} element={<User />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
