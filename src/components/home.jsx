import Product from "./product";

const Home = () => {
  return (
    <>
      <div className="row p-5 w-100">
        <div className="col-lg-3 col-md-4 col-sm-6 my-2">
          <Product />
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 my-2">
          <Product />
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 my-2">
          <Product />
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 my-2">
          <Product />
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 my-2">
          <Product />
        </div>
      </div>
    </>
  );
};

export default Home;
