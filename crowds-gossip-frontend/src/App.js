import './App.css';
import Login from "./pages/login/Login";
import {Routes,Route} from "react-router-dom";
import Register from "./pages/register/Register";
import Home from "./pages/home/Home";
function App() {
  return (
    <Routes>
        <Route exact path={'/'} element={<Home/>}/>
        <Route path={'/login'} element={<Login/>}/>
        <Route path={'/register'} element={<Register />}/>
    </Routes>
  );
}

export default App;
