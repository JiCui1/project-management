import { useState } from "react";
import { useLogin } from "../../hooks/useLogin";

import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isPending, error } = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <div>
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2 className="lato">Login</h2>
        <label>
          <input
            required
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
            placeholder="email"
          />
        </label>
        <label>
          <input
            required
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
            placeholder="password"
          />
        </label>
        {!isPending && <button className="btn">Login</button>}
        {isPending && <button className="btn">Loading</button>}
      </form>

      {error && <div className="error">{error}</div>}
    </div>
  );
}
