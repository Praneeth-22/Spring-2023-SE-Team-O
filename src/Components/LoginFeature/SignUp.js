import React from "react";
import { useState } from "react";
import "./loginpage.css";
import photo from "./img/finallogo.jpg";
import { Link } from "react-router-dom";
import ChatBot from "../ChatBot";
import google from "./img/google.svg";
import { useNavigate } from "react-router-dom";
import bg from "./img/background.jpg";
import { useUserAuth } from "../../context/UserContextApi";
import { Alert } from "@mui/material";
const SignUp=() =>{
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const { signUp } = useUserAuth();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    /*navigate("/home");*/
    try{
     await signUp(email,password);
     navigate("/login");
    }
    catch(err){
       setError(err.message);
    }
  };
  return (
    <div className="signup">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/"}>
            <img
              src={photo}
              class="img-circle"
              width="40"
              height="40"
              alt="pic"
            />
          </Link>
          <div  id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to={"/"}
                  style={{
                    color: "white",
                  }}
                >
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  to={"/sign-up"}
                  style={{
                    color: "white",
                  }}
                >
                  Sign up
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="notNav">
        <img src={bg} className="bgImg" alt="bg" />
        <div className="auth-wrapper">
          <div className="auth-inner">
            <form onSubmit={handleSubmit}>
              <h3>Sign Up</h3>
              {error && <Alert variant="danger">{error}</Alert>}
              <div className="mb-3">
                <label>Email address</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                  onChange ={(e)=>setEmail(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                  onChange ={(e)=>setPassword(e.target.value)}
                />
              </div>
              <div className="d-grid">
                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{
                    color: "white",
                    backgroundColor: "#28104e",
                  }}
                >
                  Sign Up
                </button>
              </div>
              <div className="d-grid mt-2">
                <button type="submit" className="googleBtn">
                  <a>Sign Up via Google</a>&nbsp;&nbsp;
                  <img src={google} alt="click" />
                </button>
              </div>
              <p className="forgot-password text-right">
                Already registered <a href="/">sign in?</a>
              </p>
            </form>
          </div>
        </div>
      </div>

      <ChatBot />
    </div>
  );
}

export default SignUp;
