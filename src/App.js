import { Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Categories from "./components/categories";
import Navbar from "./components/navbar";
import SignIn from "./components/signin";
import SignUp from "./components/signup";
import { useState } from "react";
import { render } from "@testing-library/react";

const App = () => {
  const [showNavbar, setShowNavbar] = useState(true);

  function handleShowNavbar() {
    showNavbar ? setShowNavbar(false) : setShowNavbar(true);
  }

  return (
    <>
      <Routes>
        <Route path="/categories" element={<Navbar />} />
        <Route path="/" element={<Navbar />} />
      </Routes>
      <div className="container mt-3">
        <Routes>
          <Route path="/signup" element={<SignUp handleShowNavbar={handleShowNavbar} />} />
          <Route path="/signin" element={<SignIn handleShowNavbar={handleShowNavbar} />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
