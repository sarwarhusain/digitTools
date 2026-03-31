import React from "react";
import CartCard from "./CartCard";

const Carts = ({ selectProducts, setSelectProducts }) => {
  // console.log(selectProducts);
  return (
    <div className="border rounded-3xl p-3">
      <h2 className="text-start">Your Cart</h2>
      <div>
        {selectProducts.map((product, idx) => (
          <CartCard
            key={idx}
            product={product}
            selectProducts={selectProducts}
            setSelectProducts={setSelectProducts}
          />
        ))}
      </div>
      
    </div>
  );
};

export default Carts;
