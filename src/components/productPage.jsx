import DarkVariantExample from "./carousel";
import { useState } from "react";

const ProductPage = ({ productId }) => {
  const [imgSrcs, setImgSrcs] = useState([]);
  const [title, setTitle] = useState("👜😍کیف بالنسیاگا");
  const [description, setDescription] = useState(
    "مناسب مهمونی و استفاده روز مره در سه رنگ تابستونی خوشگل🌸🥰 رنگ زنجیر ثابت میباشد و دارای ضمانت تعویض و برگشت میباشد"
  );
  const [details, setDetails] = useState([
    "جنس چرم مصنوعی",
    "سایز کیف ۱۵*۲۳ دارای بند بلند زنجیری",
    "عکس ژورنالی نداریم و تمامی عکس ها بدون ادیت و متعلق به پیج تیسا بگ میباشد",
  ]);

  function getProduct() {}

  return (
    <>
      <div className="row product-page-div" dir="rtl">
        <div className="col-6 carousel-div">
          <DarkVariantExample />
        </div>
        <div className="col-6 d-flex flex-column justify-content-around p-5">
          <h1>{title}</h1>
          <span className="mt-5 product-description">{description}</span>
          <ul className="product-description w-100 mt-4">
            {details.map((d) => {
              return (
                <li className="w-100 d-flex justify-content-between align-items-center mr-2 mb-4">
                  <span className="text-lighter-black details-span">{d}</span>
                  <i className="fa-solid fa-check text-success"></i>
                </li>
              );
            })}
          </ul>
          <button className="btn btn-success w-100 py-3 mt-3 parchase-btn">خرید</button>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
