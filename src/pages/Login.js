import React, {useEffect, useState} from "react";
import { gapi } from "gapi-script";
import "./Login.css"

const Login= () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
    const [popupStyle, showPopup] = useState("hide")

    const popup = () => {
        showPopup("login-popup")
        setTimeout(() => showPopup("hide"), 3000)
    }

    const onSuccess = e => {
        alert("User signed in")
        console.log(e)
    }

    const onFailure = e => {
        alert("User sign in Failed")
        console.log(e)
    }
    function handleSubmit(e) {
      e.preventDefault();
  
      console.log(email, password);
      fetch("http://localhost:5000/login-user", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data, "userRegister");
          if (data.status == "ok") {
            alert("login successful");
            window.localStorage.setItem("token", data.data);
            window.localStorage.setItem("loggedIn", true);
  
            window.location.href = "./userDetails";
          }
        });
    }
  

    return (
        <div className="cover">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>

          <div className="mb-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          </form>
            <div className="login-btn" onClick={popup} >Login
            </div>
                
            <div className={popupStyle}>
            
                <h3>Login Failed</h3>
                <p>Id-Number or password incorrect</p>
            </div>
            
        </div>
    )
}

export default Login