import Product from "./product";

const Home = ({ productIds }) => {
  return (
    <>
      <div className="row px-5 py-4 w-100">
        {productIds.map((productId) => {
          return (
            <div className="col-lg-4 col-md-6 col-sm-12 my-2">
              <Product productId={productId} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Home;
