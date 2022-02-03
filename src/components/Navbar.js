import "./Navbar.css";
// import Logo from "../assets/dc-logo.png";
import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

export default function Navbar() {
  const { logout, isPending } = useLogout();
  const { user } = useAuthContext();

  return (
    <div className="navbar">
      <ul>
        <li className="logo">{/* <img src={Logo} alt="logo" /> */}</li>

        {!user && (
          //<></> is fragment because there's more than one item to render
          <>
            <li className="login-signup-text">
              <Link to="login" className="lato">
                Login
              </Link>
            </li>
            <li className="login-signup-text">
              <Link to="signup" className="lato">
                Register
              </Link>
            </li>
          </>
        )}

        {user && (
          <li>
            {!isPending && (
              <button className="btn" onClick={logout}>
                Logout
              </button>
            )}
            {isPending && (
              <button className="btn" disabled>
                Logging out...
              </button>
            )}
          </li>
        )}
      </ul>
    </div>
  );
}
