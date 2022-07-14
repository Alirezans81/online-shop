import {NavLink, useLocation} from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const {pathname} = location;
  const splitLocation = pathname.split('/');

  return (
    <>
      <div className="d-flex justify-content-between sticky-top px-lg-5 px-md-4 px-sm-3 py-2 navbar-div">
        <div className="navbar navbar-expand nav-left">
          <nav className="navbar-nav">
              <NavLink className={"navbar-link text-decoration-none mx-2 router-link " + (splitLocation[1] === "" ? "router-link-active" : "")} to="/">Home</NavLink>
              <NavLink className={"navbar-link text-decoration-none mx-2 router-link " + (splitLocation[1] === "categories" ? "router-link-active" : "")} to="/categories">Categories</NavLink>
          </nav>
        </div>
        <div className="nav-right d-flex align-items-center">
          <NavLink className={"mx-2 text-decoration-none in-out-btn "  + (splitLocation[1] === "signup" ? "router-link-active" : "")} to="/signup">Sign up</NavLink>
          <NavLink className={"mx-2 text-decoration-none in-out-btn "  + (splitLocation[1] === "signin" ? "router-link-active" : "")} to="/signin">Sign in</NavLink>
        </div>
      </div>
    </>
  );
};

export default Navbar;
