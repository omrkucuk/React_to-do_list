import React, { useState } from "react";
import Login from "./component/Login";
import "./component/styles/styles.css";
import TodoList from "./component/TodoList";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = (success) => {
    setLoggedIn(success);
  };

  return <div>{loggedIn ? <TodoList /> : <Login onLogin={handleLogin} />}</div>;
}

export default App;
