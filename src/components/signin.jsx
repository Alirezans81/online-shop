import { useState } from "react";
import { NavLink } from "react-router-dom";
import Input from "./input";
import * as yup from "yup";

const SignIn = () => {
  const [account, setAccount] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState([]);
  const [sending, setSending] = useState(false);

  const schema = yup.object().shape({
    email: yup
      .string()
      .email("فرمت ایمیل نادرست است")
      .required("ایمیل خود را وارد کنید"),
    password: yup.string().min(8, "پسورد باید حداقل هشت کاراکتر داشته باشد"),
  });

  async function validate() {
    try {
      const result = await schema.validate(account, { abortEarly: false });
      return result;
    } catch (error) {
      console.log(error.errors);
      setErrors(error.errors);
    }
  }

  function getError() {
    throw("error!");
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const result = await validate();
    if (result) {
      try {
        setSending(true);
        const response = getError();
        setSending(false);
      } catch (error) {
        setSending(false);
        setErrors(['ایمیل یا پسورد نادرست است']);
      }
    }
  }

  function handleChange(e) {
    const input = e.currentTarget;
    const newAccount = { ...account };
    newAccount[input.name] = input.value;
    setAccount(newAccount);
  }

  return (
    <>
      <div className="signin-body">
        <NavLink
          className="back-link d-flex align-items-center justify-content-between text-decoration-none"
          to="/"
        >
          <i className="fa-solid fa-angle-left fa-2x"></i>
          <span className="">برگشت</span>
        </NavLink>
        <form
          className="form-div p-5 d-flex flex-column justify-content-around align-items-end"
          onSubmit={handleSubmit}
        >
          <div className="w-100">
            <Input
              name="email"
              value={account.email}
              onChange={handleChange}
              type="text"
              placeholder="ایمیل"
            />
            <Input
              name="password"
              value={account.password}
              onChange={handleChange}
              type="password"
              placeholder="پسورد"
            />
            {errors.length !== 0 && (
              <div className="mt-5 text-align-right">
                <ul className="errors-list" dir="rtl">
                  {errors.map((e, i) => (
                    <li key={i}>{e}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <button disabled={sending} className="btn btn-dark mt-5 px-5 py-2">ورود</button>
        </form>
      </div>
    </>
  );
};

export default SignIn;
