import "./login.css";
import { Link, useSearchParams } from "react-router-dom";
import { useState } from "react";
import { useGlobalContext } from "../../context";
import jwt_decode from "jwt-decode";
import { Navigate, useNavigate } from "react-router-dom";

function Login() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const { dispatch } = useGlobalContext();

  const isLogin = searchParams.get("mode") === "login";
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isLogin) {
      dispatch({ type: "LOGIN_START" });
      try {
        const res = await fetch(
          "https://moviebookingappbackend.onrender.com/auth/verify",
          {
            method: "POST",
            body: JSON.stringify({
              email: email,
              password: password,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const data = await res.json();
        var decoded = jwt_decode(data.accessToken);
        console.log(data.user);
        dispatch({ type: "LOGIN_SUCCESS", payload: data.user });
        if (data) {
          navigate("/");
        }
      } catch (err) {
        dispatch({ type: "LOGIN_FAILURE" });
      }
    } else {
      setError(false);
      try {
        const res = await fetch(
          "https://moviebookingappbackend.onrender.com//auth/register",
          {
            method: "POST",
            body: JSON.stringify({
              username,
              email,
              password,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const data = await res.json();
        //console.log(data);
        data && window.location.replace("/");
      } catch (err) {
        setError(true);
        console.log(err);
      }
    }
  };

  return (
    <section className="login">
      <div className="form-container">
        <h1>{isLogin ? "Login" : "Register"}</h1>
        <form onSubmit={handleSubmit}>
          <div className={isLogin ? "input-field show" : "input-field"}>
            <input
              type="text"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              name="username"
              required={!isLogin}
            />
            <span></span>
            <label>Username</label>
          </div>
          <div className="input-field">
            <input
              type="email"
              required
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              name="email"
            />
            <span></span>
            <label>Email</label>
          </div>
          <div className="input-field">
            <input
              type="password"
              required
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              name="password"
            />
            <span></span>
            <label>Password</label>
          </div>
          <button className="submit-btn" type="submit">
            Submit
          </button>
          <div className="signup-link">
            {isLogin ? "Not a member?" : "Already have an account?"}
            <Link to={`/auth?mode=${isLogin ? "signup" : "login"}`}>
              {isLogin ? " Sign Up" : " Login"}
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Login;
