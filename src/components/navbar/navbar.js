import NavClass from "./navbar.module.css";
import defaultImage from "../../images/default-image.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useGlobalContext } from "../../context";

function Navbar() {
  const { state, dispatch } = useGlobalContext();
  const [isActive, setActive] = useState(false);
  const navigate = useNavigate();
  /*console.log(state.user);*/

  const handleLogout = () => {
    localStorage.removeItem("user");
    dispatch({ type: "LOGOUT" });
    navigate(0);
  };

  const handleNavClick = () => {
    setActive(!isActive);
  };

  return (
    <nav className={NavClass.navbar}>
      <Link to="/">
        <div className={NavClass.brand_title}>Brand Name</div>
      </Link>
      {/*<a href="#" className={NavClass.toggle_button} onClick={handleNavClick}>
        <span className={NavClass.bar}></span>
        <span className={NavClass.bar}></span>
        <span className={NavClass.bar}></span>
  </a>*/}
      <a />
      {/*<div
        className={
          isActive
            ? `${NavClass.navbar_links} ${NavClass.active} `
            : NavClass.navbar_links
        }
      >
        *<ul>
          <li>
            <a href="/#">Home</a>
          </li>
          <li>
            <a href="/#">Items</a>
          </li>
          <li>
            <a href="/#">About</a>
          </li>
      </ul>
      </div>
      <div className={NavClass.inputDiv}>
        <input type="text" className={NavClass.search_movies} />
      </div>*/}
      {state.user ? (
        <>
          <img
            className={NavClass.user_image}
            src={defaultImage}
            alt="Profile Pic"
          ></img>
          <div className={NavClass.user_name}>{state.user.username}</div>
          <div className={NavClass.logout} onClick={handleLogout}>
            Logout
          </div>
        </>
      ) : (
        <div className={NavClass.login_signup}>
          <ul>
            <li>
              <Link to="/auth?mode=login">Login</Link>
            </li>
            <li>
              <Link to="/auth?mode=signup">Register</Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
