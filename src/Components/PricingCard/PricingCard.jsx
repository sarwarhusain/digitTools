import Cards from "../Cards/Cards";

const PricingCard = ({ pricingData, selectProducts, setSelectProducts }) => {
  console.log(pricingData);
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      {pricingData.map((pricing) => (
        <Cards
          key={pricing.id}
          pricing={pricing}
          selectProducts={selectProducts}
          setSelectProducts={setSelectProducts}
        ></Cards>
      ))}
    </div>
  );
};

export default PricingCard;
