import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";

const Header = () => {
  const {user , logOut} = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
    .then(() => {})
    .catch((error) => {
      console.error(error)
    })
  };

  return (
    <nav>
      <div className="navbar bg-primary text-primary-content">
        <button className="btn btn-ghost text-xl">Auth Master</button>
        <div>
          <Link to="/" className="btn btn-ghost text-xl">
            Home
          </Link>
          <Link to="/register" className="btn btn-ghost text-xl">
            Register
          </Link>
          <Link to="/login" className="btn btn-ghost text-xl">
            Login
          </Link>
          <Link to="/orders" className="btn btn-ghost text-xl">
            Orders
          </Link>
          {
            user ? <>
            <span>{user.email}</span>
            <button onClick={handleLogOut} className="btn btn-xs ml-2">Sign Out</button>
            </> : <Link to='/login' className="btn btn-secondary">Sign In</Link>
          }
        </div>
      </div>
    </nav>
  );
};

export default Header;
