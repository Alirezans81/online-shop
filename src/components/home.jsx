import Product from "./product";

const Home = () => {
  return (
    <>
      <div className="row px-5 py-4 w-100">
        <div className="col-lg-4 col-md-6 col-sm-12 my-2">
          <Product />
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 my-2">
          <Product />
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 my-2">
          <Product />
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 my-2">
          <Product />
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 my-2">
          <Product />
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 my-2">
          <Product />
        </div>
      </div>
    </>
  );
};

export default Home;
