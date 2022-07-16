const Footer = () => {
  return (
    <>
      <div className="bg-dark p-5 d-flex justify-content-between">
        <div className="footer-left d-flex flex-column flex-md-row-reverse justify-content-around align-items-center w-100">
          <i className="fa-brands fa-instagram fa-10x instagram"></i>
          <a className="h2 text-decoration-none instagram-link font-weight-light" href="https://www.instagram.com/tisa.bagg/">اینستاگرام ما</a>
        </div>
        <div className="footer-right d-flex flex-column align-items-end w-100 mx-5">
          <h1 className="mb-5 text-white text-align-right">کیــــــف تیــــسا✨</h1>
          <h5 className="mb-3 font-weight-light text-lighter">با تیسا استایل منحصر به فردتو بساز🤍🌟</h5>
          <h5 className="mb-3 font-weight-light text-lighter">کیف با قیمت های مناسب👜</h5>
          <h5 className="mb-3 font-weight-light text-lighter">فروش بصورت آنلاین🤳🏻</h5>
        </div>
      </div>
    </>
  );
};

export default Footer;
