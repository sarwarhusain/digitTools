import { toast } from "react-toastify";
import CartCard from "./CartCard";

const Carts = ({ selectProducts, setSelectProducts }) => {
  const total = selectProducts.reduce((acc, curr) => acc + curr.price, 0);
  console.log(total.toFixed(2));
  const proceed = () => {
    // console.log("clicked");
    toast.warning(`Proceed The Total Amount${total.toFixed(2)}`);
    setSelectProducts([]);
  };
  // console.log(selectProducts);
  return selectProducts.length === 0 ? (
    <div className="flex justify-center items-center min-h-screen bg-base-200">
      <div className="bg-white shadow-lg rounded-2xl p-8 text-center max-w-sm">
        <div className="text-6xl mb-4">🛒</div>
        <h2 className="text-2xl font-bold mb-2">Your Cart is Empty</h2>
        <p className="text-gray-500 mb-6">
          Looks like you haven't added anything yet.
        </p>
        <button className="btn btn-primary w-full">Continue Shopping</button>
      </div>
    </div>
  ) : (
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
