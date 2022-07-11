import { useState } from "react";

const Product = (props) => {
  const [count, setCount] = useState(props.count);

  function handlePlus() {
    setCount(count + 1);
  }

  function handleMinus() {
    setCount(count - 1);
  }

  function handleDelete() {
    props.onDelete(props.id);
  }

  return (
    <>
      <span className="m-1 text-primary">{props.name}</span>
      <span className="m-1 badge bg-secondary">{count}</span>
      <button onClick={handlePlus} className="m-1 btn btn-success">
        +
      </button>
      <button onClick={handleMinus} className="m-1 btn btn-warning">
        -
      </button>
      <br />
      <button onClick={handleDelete} className="m-1 btn btn-danger">
        delete
      </button>
    </>
  );
};

export default Product;
