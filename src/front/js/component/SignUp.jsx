import React, { useContext, useState, } from "react";
import { Context } from "../store/appContext.js";
import { useNavigate, Link } from "react-router-dom";
import "../../styles/signup.css"
import Navbar from "./Navbar.jsx";

const Signup = () => {

  const { store, actions } = useContext(Context);
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const handlerCreateUser = async () => {
    try {

      if (!fullName || !email || !password) {
        alert("Por favor completa todos los campos");
        return;
      }


      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert("Por favor ingresa un correo electrónico válido");
        return;
      }

      let newUser = {
        fullName: fullName,
        email: email,
        password: password
      }

      const result = await actions.sign_up(newUser)
      if (result.msg) {
        alert("usuario registrado")
        navigate("/")
      }

    } catch (e) {
      console.error(e)
    }
  }

  return (

    <>

      <div className='container-form'>

        <div className='information'>

          <div className='info-childs'>

            <h2>Welcome!</h2>

            <p>Get ready to find your next cinematic obsession! Explore, vote for your favorites, and share your thoughts with a passionate community.</p>

            <p>Welcome to your ultimate guide for movies and series!"</p>

            <Link to={"/"}>

              <button className="button-login">Log In</button>

            </Link>

          </div>

        </div>

        <div className='form-information'>

          <div className='forminformation-childs'>

            <h2>Create an Account</h2>

            <div className='icons'>
              <i className="fa-brands fa-google"></i>
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-instagram"></i>
            </div>

            <p>Use your email to register</p>

            <form className='form'>

              <label htmlFor='fullname'>
                <i className="fa-solid fa-user"></i>
                <input type='text' id='fullname' placeholder='Full Name' value={fullName} onChange={(e) => setFullName(e.target.value)} />
              </label>

              <label htmlFor='email'>
                <i className="fa-solid fa-envelope"></i>
                <input type='email' id='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
              </label>

              <label htmlFor='password'>
                <i className="fa-solid fa-lock"></i>
                <input type='password' id='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
              </label>

              <button className='input-submit' onClick={handlerCreateUser} type='button'>Sign In</button>

            </form>

          </div>

        </div>

      </div>

    </>

  );
};

export default Signup;