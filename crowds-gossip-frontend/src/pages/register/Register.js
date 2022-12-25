//bstakhdmo mkan el array 3alshan brag3 mno hagat is async byhsal 3aliha life cycle w athakm fiha
import React,{useState }from "react";
import{ Link  } from "react-router-dom";
//bykhalini a style f file javaScribt
import styled from 'styled-components';
import Logo from "../../assets/logo2.png";
import * as API from '../../API/User'
import { useNavigate } from "react-router-dom";



 function Register() {
  const navigate = useNavigate()

  //values di el haga elly 3ndy 
  //set values di el haga elly bttghayr
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  
   }  );
  //btshtghl lma el A ttghiar
   

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (e)=>{
    e.preventDefault()
    await API.register({
      name:values.username,
      email:values.email,
      password:values.password
    })
    navigate('/login')
  }
  

  return (
    <>
      <FormContainer>
        <form>
          <div className="brand">
            <img src={Logo} alt="logo" />
            <h1>crowd's gossip</h1>
          </div>
          <input
            type="text"
            placeholder="Username"
            name="username"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            onChange={(e) => handleChange(e)}
          />
          <button onClick={handleSubmit}>Creat User</button>
          <span>
            Already have an account ?<Link to="/login">Login.</Link>
          </span>
        </form>
      </FormContainer>
      {/* <ToastContainer /> */}
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
background-color:#131315;
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
    color: white;
    text-transform: uppercase;
    
    
 
 }
 form{
    display: flex;
    flex-direction: column;
    gap: 2rem;
    background-color: #00000076;
    border-radius:2rem;
    padding: 2rem 4rem;
    box-shadow: 0 15px 25px rgba(143, 124, 236, 0.7);
 
 input{
    background-color: transparent;
    padding: 1rem;
    border-bottom: 1px solid #fff;
    border-radius: 0.4rem;
    color: white;
    width: 100%;
    font-size: 1rem;
    &:focus{
       border: 0.1rem solid #997af0;
       outline:none;
    }
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
    color:white;
    padding: 1rem 2rem ;
    
    text-transform:uppercase;
 a{
    color: #4e0eff;
    text-decoration: none;
    font-weight: bold;
 }
}
 }
`;export default Register;


