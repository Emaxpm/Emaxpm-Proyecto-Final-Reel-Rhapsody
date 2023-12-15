import React, { useContext, useState, } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import "../../styles/signup.css"

const Signup = () => {

  const { store, actions } = useContext(Context);
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const creatNewUser = async () => {

		try {

			let newUser = {
        fullName: fullName,
				email: email,
				password: password	
			}
			
			await actions.sign_up(newUser)

		} catch (error) {
			console.log(error)
		}

     alert("usuario registrado")
			navigate("/demo")

	}

  return (

    <>

      

      <div className='container-form'>

        <div className='information'>

          <div className='info-childs'>

            <h2>Welcome To Reel Rhapsody</h2>

            <p>Get ready to find your next cinematic obsession! Explore, vote for your favorites, and share your thoughts with a passionate community.</p>

            <p>Welcome to your ultimate guide for movies and series!"</p>

            <button className="button-login">Log In</button>

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

              <button className='input-submit' onClick={creatNewUser} type='button'>Sign In</button>

            </form>

          </div>

        </div>

      </div>

    </>

  );
};

export default Signup;