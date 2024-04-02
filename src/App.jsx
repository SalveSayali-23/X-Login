import React, { useState } from "react";

const App = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (userName === "user" && password === "password") {
      setMessage("Welcome, user!");
    } else {
      setMessage("Invalid username or password");
      // setIsSubmitted(false);
    }
    setIsSubmitted(true);
  };

  return (
    <div>
      <h1>Login Page</h1>
      {!isSubmitted ? (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              value={userName}
              placeholder="username"
              onChange={(e) => setUserName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="text"
              value={password}
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <p>{message}</p>
        </div>
      )}
    </div>
  );
};

export default App;
