//bstakhdmo mkan el array 3alshan brag3 mno hagat is async byhsal 3aliha life cycle w athakm fiha
import React,{useState, /*useEffect*/ }from "react";
import{ Link ,useNavigate } from "react-router-dom";
//bykhalini a style f file javaScribt
import styled from 'styled-components';
import Logo from "../../assets/logo2.png";
import * as API from '../../API/User'
import { Cookies } from "react-cookie";
import {ToastContainer,toast} from"react-toastify";
import "react-toastify/dist/ReactToastify.css";

 function Login() {
  const navigate = useNavigate();
  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };
  //values di el haga elly 3ndy 
  //set values di el haga elly bttghayr
  const [values, setValues] = useState({
    username: "",
    password: "",
   });
  //btshtghl lma el A ttghiar
 

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleSubmit = (e)=>{
    e.preventDefault()
    API.login({
      email:values.username,
      password:values.password
    }).then((res)=>{
      if(!res.data.status){
        toast.error('invalid email or password',toastOptions)
        return false
      }else{
        const cookie=new Cookies()
        cookie.set('Authorization','Bearer '+res.data.token)
        navigate('/')
        return true
      }
    })
  }
  
  

  return (
    <>
      <FormContainer>
        <form onSubmit={handleSubmit} >
          <div className="brand">
            <img src={Logo} alt="logo" />
            <h1>crowd's gossip</h1>
          </div>
          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={(e) => handleChange(e)}
            min="3"
          />
          
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={(e) => handleChange(e)}
          />
          
          <button type="submit">Login</button>
          <span>
            Don't have an Account ? <Link to="/register">Register.</Link>
          </span>
        </form>
      </FormContainer>
      <ToastContainer />
    </>
  );
}

const FormContainer = styled.div`
height:100vh;
width:100vw;
display:flex;
flex-direction :column;
justify-content :center;
gap:1rem;
align-items :Center;
background-color:#f4f3f8;
.brand{
    display:flex;
    align-items:center;
    gap:1rem;
    kustify-content:center;
    img{
        height :5rem ;
         
    }
}
h1{
    color: black;
    text-transform: uppercase;
 }
 form{
    display: flex;
    flex-direction: column;
    gap: 2rem;
    background-color: #f4f3f8;
    border-radius:2rem;
    padding: 2rem 4rem;
    box-shadow: 0 15px 250px rgba(100, 100, 100, 5);
 
 input{
  padding: 1rem 0.3rem ;
    border-radius: 0.4rem;
    color: black;
    width: 100%;
    font-size: 1rem;
}
button{
    background-color: black;
    color: white;
    padding: 1rem 2rem ;
    border: none;
    font-weight: bold;
    cursor: pointer;
    border-radius: 0.4rem;
    font-size:1rem;
    text-transform: uppercase;
    transition: 0.5s ease-in-out;
    &:hover{
       background-color: #4e0eff;
    }
    box-shadow: 0 0 2px #8F7CEC, 0 0 10px #8F7CEC, 0 0 10px #8F7CEC, 0 0 30px #8F7CEC;
 }
 span{
    color:black;
    padding: 1rem 2rem ;
    font-weight: bold;
    
    text-transform:uppercase;
 a{
    color: #4e0eff;
    text-decoration: none;
    font-weight: bold;
 }
}
 }
`;
 export default Login;


