import './App.css';
import Login from "./pages/login/Login";
import {Routes,Route} from "react-router-dom";
import Register from "./pages/register/Register";
import Feed from "./pages/home/Feed";
function App() {
  return (
    <Routes>
        <Route exact path={'/'} element={<Feed name={'name'} followers={[{name:"mae,"}]} followings={[{name:"dd"}]} posts={[]}/>}/>
        <Route path={'/login'} element={<Login/>}/>
        <Route path={'/register'} element={<Register />}/>
    </Routes>
  );
}

export default App;
