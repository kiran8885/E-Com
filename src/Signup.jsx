import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const data = {
    myName: name,
    myEmail: email,
    myPassword: password,
  };

  function goToLogin() {
    navigate("/login");
  }

  async function signup() {
    if (!name || !email || !password) {
      alert("Please fill all fields");
      return;
    }

    const response = await fetch(
      "https://68871332071f195ca97f29a6.mockapi.io/users",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    if (response.ok) {
      alert("Signup successful!");
      setName("");
      setEmail("");
      setPassword("");
      navigate("/login");
    } else {
      alert("Signup failed. Please try again.");
    }
  }

  return (
    <div className="signup">
      <div className="signup__card">
        <h1 className="signup__title">E-Com</h1>
        <h2 className="signup__subtitle">Create Your Account</h2>

        <label className="signup__label">Full Name</label>
        <input
          className="signup__input"
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Enter your name"
        />

        <label className="signup__label">Email Address</label>
        <input
          className="signup__input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Enter your email"
        />

        <label className="signup__label">Password</label>
        <input
          className="signup__input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Enter your password"
        />

        <button className="signup__button" onClick={signup}>
          Create an Account
        </button>

        <p className="signup__login-text">
          Already have an account?{" "}
          <span className="signup__login-link" onClick={goToLogin}>
            Login here
          </span>
        </p>
      </div>
    </div>
  );
}

export default Signup;
