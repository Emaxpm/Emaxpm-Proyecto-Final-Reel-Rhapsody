import React, { useContext, useState, } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import "../../styles/signup.css"

const Signup = () => {

  const { store, actions } = useContext(Context);
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("");
  const navigate = useNavigate()

  const validateEmail = (email) => {
    // Expresión regular para validar el formato del correo electrónico
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const validatePassword = (password) => {
    // Verificar que la contraseña tenga al menos 8 caracteres
    return password.length >= 8;
  };



  const creatNewUser = async () => {

    try {
      if (fullName == "" || email == "" || password == "") {
        return "All spaces must be filled"
      }

      if (!validateEmail(email)) {
        return "Please enter a valid email address";
      }

      if (!validatePassword(password)) {
        return "Password must be at least 8 characters long";
      }

      let newUser = {
        fullName: fullName,
        email: email,
        password: password
      }

      const result = await actions.signup(newUser);

      if (result.success) {
        // Si el registro fue exitoso
        setError(""); // Limpiar cualquier mensaje de error existente
        navigate("/home");
      } else {
        // Si hubo un error al registrar al usuario
        setError(result.message || "There was an error creating the user.");
      }

    } catch (error) {
      setError("There was an error creating the user. Please try again."); // Mensaje genérico de error
      console.log(error);
    }
  }

  return (

    <>

      {error && <div className="error-message">{error}</div>} {/* Mostrar mensaje de error si existe */}

      <div className='container-form'>

        <div className='information'>

          <div className='info-childs'>

            <h2>Welcome</h2>

            <p>Thank you for joining our community! We're thrilled to have you on board. Together, we're about to embark on an exciting journey full of possibilities.</p>

            <button className="button-login">Log In</button>


          </div>

        </div>

        <div className='form-information'>

          <div className='forminformation-childs'>

            <h2>Create an Account</h2>

            <div className='icons'>
              <i className="fa-brands fa-google"></i>
              <i className="fa-brands fa-github"></i>
              <i className="fa-brands fa-linkedin"></i>
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

              <button className='input-submit' onClick={creatNewUser} type='submit'>Sign In</button>

            </form>

          </div>

        </div>

      </div>

    </>
    
  );
};

export default Signup;