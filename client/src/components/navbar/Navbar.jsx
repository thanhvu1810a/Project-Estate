import { useContext, useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import apiRequest from "../../lib/apiRequest";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

  const { currentUser } = useContext(AuthContext);

  const navigate = useNavigate();
  const { updateUser, currentUsers } = useContext(AuthContext);
  const handleLogout = async () => {
    try {
      await apiRequest.post("auth/logout");
      updateUser(null);
      navigate("/");
    } catch (err) {}
  };
  return (
    <nav>
      <div className="left">
        <a href="/" className="logo">
          <img src="/logo.png" alt="" />
          <span>Estate App</span>
        </a>
        <a href="/">Home</a>
        <a href="/list">List</a>
      </div>
      <div className="right">
        {currentUser ? (
          <div className="user">
            <img src={currentUser.avatar || "noavatar.jpeg"} alt="" />
            <span>{currentUser.username}</span>
            <Link to="/profile" className="profile">
              <div></div>
              <span>Profile</span>
            </Link>
            <div className="profile">
              <span>
                <button onClick={handleLogout}>Logout</button>
              </span>
            </div>
          </div>
        ) : (
          <>
            <a href="/login">Sign in</a>
            <a href="/register">Sign up</a>
          </>
        )}
        <div className="menuIcon">
          <img
            src="/menu.png"
            alt=""
            onClick={() => setOpen((prev) => !prev)}
          />
        </div>
        <div className={open ? "menu active" : "menu"}>
          <a href="/">Home</a>
          <a href="/">List</a>
          <a href="/">Sign in</a>
          <a href="/">Sign up</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
