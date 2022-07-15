import { Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Categories from "./components/categories";
import Navbar from "./components/navbar";
import SignIn from "./components/signin";
import SignUp from "./components/signup";
import { useState } from "react";

const App = () => {
  const [showNavbar, setShowNavbar] = useState(true);

  function handleShowNavbar() {
    showNavbar ? setShowNavbar(false) : setShowNavbar(true);
  }

  return (
    <>
      <div className="body-img-div">
        <Routes>
          <Route path="/categories" element={<Navbar />} />
          <Route path="/" element={<Navbar />} />
        </Routes>
        <Routes>
          <Route
            path="/signup"
            element={<SignUp handleShowNavbar={handleShowNavbar} />}
          />
          <Route
            path="/signin"
            element={<SignIn handleShowNavbar={handleShowNavbar} />}
          />
          <Route path="/categories" element={<Categories />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
