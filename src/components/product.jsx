import { useState } from "react";

const Product = () => {
  const [imgSrc, setImgSrc] = useState();

  return (
    <>
      <div className="card product-div">
        <img
          className="card-img-top product-img"
          src={require("../back-end/productsFiles/product1.jpg")}
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title text-center">👜😍کیف بالنسیاگا</h5>
          <p className="card-text product-description">
            مناسب مهمونی و استفاده روز مره در سه رنگ تابستونی خوشگل🌸🥰 رنگ
            زنجیر ثابت میباشد و دارای ضمانت تعویض و برگشت میباشد
          </p>
          <ul className="product-description w-100">
            <li className="w-100 d-flex justify-content-between align-items-center mr-2 mb-4">
              <i className="fa-solid fa-check text-success"></i>
              <span className="text-lighter-black">جنس چرم مصنوعی</span>
            </li>
            <li className="w-100 d-flex justify-content-between align-items-center mr-2 mb-4">
              <i className="fa-solid fa-check text-success"></i>
              <span className="text-lighter-black">سایز کیف ۱۵*۲۳ دارای بند بلند زنجیری</span>
            </li>
            <li className="w-100 d-flex justify-content-between align-items-center mr-2 mb-1">
              <i className="fa-solid fa-check text-success"></i>
              <span className="text-lighter-black">
                عکس ژورنالی نداریم و تمامی عکس ها بدون ادیت و متعلق به پیج تیسا
                بگ میباشد
              </span>
            </li>
          </ul>
          <span className="w-100 d-inline-block">
            <div className="d-flex justify-content-between align-items-center">
              <span>
                <a href="#" className="btn btn-outline-success">
                  خرید
                </a>
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
