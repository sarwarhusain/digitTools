import React, { use, useState } from "react";
import PricingCard from "../PricingCard/PricingCard";
import Carts from "../Carts/Carts";

const PricingOption = ({ cardsPromise,selectProducts, setSelectProducts }) => {


  const [selected, setSelected] = useState("products");
  const pricingData = use(cardsPromise);
  // console.log(pricingData);

  return (
    <div className="container mx-auto text-center space-y-3">
      <h2 className="text-4xl font-bold">Premium Digital Tools</h2>
      <p className="text-[#627382] ">
        Choose from our curated collection of premium digital products designed
        to boost your productivity and creativity
      </p>
      <div className="space-x-1">
        <button
          onClick={() => {
            setSelected("products");
          }}
          className={`btn ${selected === "products" ? "bg-[#4F39F6] text-white" : ""} rounded-full `}
        >
          Products
        </button>
        <button
          onClick={() => {
            setSelected("carts");
          }}
          className={`btn ${selected === "carts" ? "bg-[#4F39F6] text-white" : ""} rounded-full `}
        >
          Carts{selectProducts.length}
        </button>
      </div>
      {/* {selected === "products" ? (
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-5">
          {pricingData.map((pricing) => (
            <Cards key={pricing.id} pricing={pricing}></Cards>
          ))}
        </div>
      ) : (
        <Carts></Carts>
      )} */}

      {selected === "products" ? (
        <PricingCard
          pricingData={pricingData}
          selectProducts={selectProducts}
          setSelectProducts={setSelectProducts}
        ></PricingCard>
      ) : (
        <Carts
          selectProducts={selectProducts}
          setSelectProducts={setSelectProducts}
        ></Carts>
      )}
    </div>
  );
};

export default PricingOption;
