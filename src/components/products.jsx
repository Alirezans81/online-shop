import { useState } from "react";
import Product from "./product";

const Products = () => {
  const [products, setProducts] = useState([
    { id: 1, count: 5, name: "laptop" },
    { id: 2, count: 0, name: "phone" },
    { id: 3, count: 4, name: "airpod" },
    { id: 4, count: 2, name: "pc" },
  ]);

  function handleDelete(productId) {
    const newProducts = products.filter((p) => p.id !== productId);
    setProducts(newProducts);
  }

  return (
    <div className="row text-center">
      {products.map((p, index) => (
        <div className="col-3">
            <Product
              onDelete={handleDelete}
              key={index}
              id={p.id}
              name={p.name}
              count={p.count} 
              />
        </div>
      ))}
    </div>
  );
};

export default Products;
