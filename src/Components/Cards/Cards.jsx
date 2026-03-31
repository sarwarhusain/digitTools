const Cards = ({ pricing, selectProducts, setSelectProducts }) => {

  const handleCart = () => {

    alert(`added ${pricing.name}`);
    setSelectProducts([...selectProducts, pricing]);
    // console.log("clicked", selectProducts);
  };
  return (
    <div
      className={`card bg-base-100 shadow-xl border rounded-2xl p-6 relative transition duration-300 hover:shadow-2xl hover:-translate-y-2 ${pricing.isFeatured ? "border-2 border-purple-500 scale-105" : ""}`}
    >
      <div className="absolute right-4 top-4 badge badge-warning rounded-full">
        {pricing.tag}
      </div>

      <div className="w-12 h-12 flex items-center justify-center bg-base-200 rounded-full text-2xl mb-4">
        {pricing.icon}
      </div>

      <h2 className="text-xl font-semibold mb-2">{pricing.name}</h2>

      <p className="text-gray-500 text-sm mb-4">{pricing.description}</p>

      <div className="mb-4">
        <span className="text-3xl font-bold">${pricing.price}</span>
        <span className="text-gray-500 text-sm">
          /{pricing.period === "monthly" ? "Mo" : pricing.period}
        </span>
      </div>

      <ul className="space-y-2 mb-6">
        {pricing.features.map((feature, idx) => (
          <li key={idx} className="flex items-center gap-2 text-gray-600">
            <span className="text-green-500">✔</span>
            {feature}
          </li>
        ))}
      </ul>

      <button
        onClick={handleCart}
        className="btn w-full rounded-full text-white bg-gradient-to-r from-[#7B2FF7] to-[#F107A3] border-none"
      >
        Buy Now
      </button>
    </div>
  );
};

export default Cards;
