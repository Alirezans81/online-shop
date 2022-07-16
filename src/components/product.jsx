import { useState } from "react";
import { NavLink } from "react-router-dom";

const Product = ({ productId }) => {
  const [imgSrc, setImgSrc] = useState("");
  const [title, setTitle] = useState("👜😍کیف بالنسیاگا");

  return (
    <>
      <div className="card product-div">
        <img
          className="card-img-top product-img"
          src={require("../back-end/productsFiles/product1.jpg")}
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title text-center">{title}</h5>
          <span className="w-100 d-inline-block">
            <div className="d-flex justify-content-between align-items-center mt-4">
              <span>
                <NavLink
                  className="btn btn-outline-success"
                  to={"products/" + productId}
                >
                  خرید
                </NavLink>
              </span>
              <span className="product-price ml-5">قیمت کیف ۲۳۸ تومان</span>
            </div>
          </span>
        </div>
      </div>
    </>
  );
};

export default Product;
