import React, { useState } from "react";
import "./styles/styles.css";

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username === "admin" && password === "12345") {
      onLogin(true); 
    } else {
      alert("Kullanıcı adı veya parola yanlış!");
    }
  };

  return (
    <div className="login-container">
      <h1>Login Sayfası</h1>
      <form className="login-form">
        <input
          className="login-input"
          type="text"
          placeholder="Kullanıcı Adı"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="login-input"
          type="password"
          placeholder="Parola"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </form>
      <button className="login-button" onClick={handleLogin}>
        Giriş Yap
      </button>
    </div>
  );
}

export default Login;
