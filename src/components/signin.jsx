import { NavLink } from "react-router-dom";

const SignIn = () => {
  return (
    <>
      <div className="signin-body">
        <NavLink className="back-link d-flex align-items-center justify-content-between text-decoration-none" to="/">
          <i className="fa-solid fa-angle-left fa-2x"></i>
          <span className="">برگشت</span>
        </NavLink>
        <form
          className="form-div p-5 d-flex flex-column justify-content-around align-items-end"
          action=""
        >
          <div className="w-100">
            <input
              className="w-100 px-4 py-2 inputs mt-5 text-align-right"
              id="email"
              type="text"
              placeholder="ایمیل"
            />
            <input
              className="w-100 px-4 py-2 inputs mt-5 text-align-right"
              id="password"
              type="text"
              placeholder="پسورد"
            />
          </div>
          <button className="btn btn-dark mt-5 px-5 py-2">ورود</button>
        </form>
      </div>
    </>
  );
};

export default SignIn;
