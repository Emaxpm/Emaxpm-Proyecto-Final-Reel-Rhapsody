import React from 'react'
import "../../styles/signup.css"

const Signup = () => {
  return (
    <>
      <div className='container-form'>

        <div className='information'>

          <div className='info-childs'>

            <h2>Welcome</h2>

            <p>Thank you for joining our community! We're thrilled to have you on board. Together, we're about to embark on an exciting journey full of possibilities.</p>

            <input type='button' value='Log In' />


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
                <input type='text' id='fullname' placeholder='Full Name' />
              </label>

              <label htmlFor='email'>
                <i className="fa-solid fa-envelope"></i>
                <input type='email' id='email' placeholder='Email' />
              </label>

              <label htmlFor='password'>
                <i className="fa-solid fa-lock"></i>
                <input type='password' id='password' placeholder='Password' />
              </label>

              <input className='input-submit' type='button' value='Sign In' />


            </form>

          </div>

        </div>

      </div>

    </>
  );
};

export default Signup;