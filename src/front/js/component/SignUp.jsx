import React, { useContext, useState } from "react";
import { Context } from "../store/appContext.js";
import { useNavigate, Link } from "react-router-dom";
import Swal from "sweetalert2";
import "../../styles/signup.css";

const Signup = () => {
  const { actions } = useContext(Context);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const validatePassword = (password) => {
    return password.length >= 8;
  };

  const handlerCreateUser = async () => {
    try {
      if (!fullName || !email || !password) {
        Swal.fire({
          icon: "warning",
          title: "Please complete all fields",
        });
        return;
      }

      if (!validatePassword(password)) {
        Swal.fire({
          icon: "warning",
          title: "Password must be at least 8 characters long",
        });
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        Swal.fire({
          icon: "warning",
          title: "Please enter a valid email address",
        });
        return;
      }

      let newUser = {
        fullName: fullName,
        email: email,
        password: password,
      };

      const result = await actions.sign_up(newUser);

      if (result.msg) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "User registered",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/login");
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <div className="container-form">
        <div className="information">
          <div className="info-childs">
            <h2>Welcome!</h2>
            <p>
              Get ready to find your next cinematic obsession! Explore, vote
              for your favorites, and share your thoughts with a passionate
              community.
            </p>
            <p>Welcome to your ultimate guide for movies and series!"</p>
            <Link to={"/login"}>
              <button className="info-buton log-but">Log In</button>
            </Link>
          </div>
        </div>

        <div className="form-information">
          <div className="forminformation-childs">
            <h2>Create an Account</h2>
            <form className="form">
              <label htmlFor="fullname">
                <i className="fa-solid fa-user"></i>
                <input
                  type="text"
                  id="fullname"
                  placeholder="Full Name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </label>

              <label htmlFor="email">
                <i className="fa-solid fa-envelope"></i>
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>

              <label htmlFor="password">
                <i className="fa-solid fa-lock"></i>
                <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>

              {error && <p className="error-message">{error}</p>}

              <button
                className="info-buton sig-but"
                onClick={handlerCreateUser}
                type="button"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
