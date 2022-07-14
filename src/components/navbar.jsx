const Navbar = () => {
  return (
    <>
      <div className="d-flex justify-content-between sticky-top px-lg-5 px-md-4 px-sm-3 py-2 navbar-div">
        <div className="navbar navbar-expand nav-left">
          <nav className="navbar-nav">
              <a className="navbar-link text-decoration-none mx-2 router-link router-link-active" href="#">Home</a>
              <a className="navbar-link text-decoration-none mx-2 router-link" href="#">Categories</a>
          </nav>
        </div>
        <div className="nav-right">
          <button className="btn in-out-btn">Sign up</button>
          <button className="btn in-out-btn">Sign in</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
