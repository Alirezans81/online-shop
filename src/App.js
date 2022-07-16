import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./components/home";
import Categories from "./components/categories";
import Navbar from "./components/navbar";
import SignIn from "./components/signin";
import SignUp from "./components/signup";
import { useState } from "react";
import Footer from "./components/footer";
import ProductPage from "./components/productPage";

const App = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [closeNavbar, setCloseNavbar] = useState(false);
  const [productIds, setProductIds] = useState([0, 1, 2, 3, 4, 5]);

  function getProductIds() {}

  function handleShowNavbar() {
    showNavbar ? setShowNavbar(false) : setShowNavbar(true);
  }

  return (
    <>
      <div className="body-img-div">
        <Routes>
          {productIds.map((productId) => {
            return (
              <Route
                path={"/products/" + productId}
                element={<Navbar />}
              />
            );
          })}
          <Route
            path="/categories"
            element={<Navbar />}
          />
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
          <Route path="/" element={<Home productIds={productIds} />} />
        </Routes>
      </div>
      <Routes>
        {productIds.map((id) => {
          return (
            <Route
              path={"/products/" + id}
              element={<ProductPage productId={id} />}
            />
          );
        })}
      </Routes>
      <Routes>
        <Route path="/categories" element={<Footer />} />
        <Route path="/" element={<Footer />} />
      </Routes>
    </>
  );
};

export default App;
