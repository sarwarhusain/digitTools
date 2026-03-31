import CartCard from "./CartCard";

const Carts = ({ selectProducts, setSelectProducts }) => {
  const total = selectProducts.reduce((acc, curr) => acc + curr.price, 0);
  console.log(total.toFixed(2));
  const proceed = () => {
    // console.log("cllicked");
    setSelectProducts([]);
  };
  console.log(selectProducts);
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
      <div className="flex justify-between items-center mt-5">
        <p className="font-bold">Total</p>
        <p className="font-bold">${total.toFixed(2)}</p>
      </div>
      <button
        className="btn w-full rounded-full text-white bg-linear-to-r from-[#7B2FF7] to-[#F107A3] border-none"
        onClick={proceed}
      >
        Proceed
      </button>
    </div>
  );
};

export default Carts;
