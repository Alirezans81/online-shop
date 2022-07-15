import { useState } from 'react';
import {NavLink, useLocation} from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const {pathname} = location;
  const splitLocation = pathname.split('/');

  const [navbarScrolled, setNavbarScrolled] = useState(false);

  const changeNavbar = async ()=>{
    if (window.scrollY >= 100) {
      setNavbarScrolled(true);
    } else if (window.scrollY == 0) {
      setNavbarScrolled(false);
    }
  }

  window.addEventListener('scroll', changeNavbar);

  return (
    <>
      <div className={navbarScrolled ? "d-flex justify-content-between sticky-top px-lg-5 px-md-4 px-sm-3 py-2 navbar-div navbar-div-scrolled": "d-flex justify-content-between sticky-top px-lg-5 px-md-4 px-sm-3 py-2 navbar-div"}>
        <div className="navbar navbar-expand nav-left">
          <nav className="navbar-nav">
              <NavLink className={"navbar-link text-decoration-none mx-2 router-link " + (splitLocation[1] === "" ? "router-link-active" : "")} to="/">خانه</NavLink>
              <NavLink className={"navbar-link text-decoration-none mx-2 router-link " + (splitLocation[1] === "categories" ? "router-link-active" : "")} to="/categories">دسته بندی</NavLink>
          </nav>
        </div>
        <div className={navbarScrolled ? 'nav-mid text-center d-none' : 'nav-mid text-center d-none d-sm-flex flex-column justify-content-between align-items-center'}>
          <div className='navbar-logo mt-1'></div>
          <span className='title mt-1'>Tisa Bag</span>
        </div>
        <div className="nav-right d-flex align-items-center">
          <NavLink className={"mx-2 text-decoration-none in-out-btn "  + (splitLocation[1] === "signin" ? "router-link-active" : "")} to="/signin">ورود</NavLink>
          <NavLink className={"mx-2 text-decoration-none in-out-btn "  + (splitLocation[1] === "signup" ? "router-link-active" : "")} to="/signup">ثبت نام</NavLink>
        </div>
      </div>
    </>
  );
};

export default Navbar;
