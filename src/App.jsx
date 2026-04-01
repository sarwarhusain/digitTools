import { Suspense, useState } from "react";
import "./App.css";
import Banner from "./Components/Banner/Banner";
import NavBar from "./Components/NavBar/NavBar";
import Stat from "./Components/Stat/Stat";
import PricingOption from "./Components/PricingOption/PricingOption";
import { ToastContainer } from "react-toastify";
import ThreeSteps from "./Components/ThreeSteps/ThreeSteps";
import Transparent from "./Components/Transparent/Transparent";
import WorkFlow from "./Components/WorkFlow/WorkFlow";

const cardsPromise = fetch("/data.json").then((res) => res.json());
function App() {
  const [selectProducts, setSelectProducts] = useState([]);
  return (
    <>
      <NavBar
        selectProducts={selectProducts}
        setSelectProducts={setSelectProducts}
      />
      <Banner />
      <Stat />
      <Suspense
        fallback={<span className="loading loading-ring loading-xl"></span>}
      >
        <PricingOption
          cardsPromise={cardsPromise}
          selectProducts={selectProducts}
          setSelectProducts={setSelectProducts}
        ></PricingOption>
      </Suspense>
      <ToastContainer />
      <ThreeSteps />
      <Transparent />
      <WorkFlow />
    </>
  );
}

export default App;
