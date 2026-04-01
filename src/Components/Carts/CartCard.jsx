import { toast } from "react-toastify";

const CartCard = ({ product, selectProducts, setSelectProducts }) => {
  const handleDelete = (product) => {
    // console.log("clicked", product);
    const filteredProduct = selectProducts.filter(
      (cartsProduct) => cartsProduct.id !== product.id,
    );
    // console.log("filtered", filteredProduct);
    toast.warning (`Deleted ${product}`)
    setSelectProducts(filteredProduct);
  };

  return (
    <div className="max-w-7xl mx-auto mt-5">
      <div className=" bg-[#F9FAFC] shadow-sm">
        <div className="space-y-1">
          <div className="flex items-center justify-between p-3 rounded-lg">
            <div className="flex items-center gap-3">
              <span className="text-2xl">{product.icon}</span>
              <div>
                <h3 className="font-semibold">{product.name}</h3>
                <p className="text-sm text-gray-500">${product.price}</p>
              </div>
            </div>
            <button
              onClick={() => handleDelete(product)}
              className=" text-red-500 font-bold"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
