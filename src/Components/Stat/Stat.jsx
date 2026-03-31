import React from "react";

const Stat = () => {
  return (
    <div className=" my-10 bg-[#4F39F6] ">
      <div className="stats shadow flex justify-between text-center ">
        <div className="stat ">
          <div className="stat-value  text-white">500K+</div>
          <div className="stat-desc text-white">Active User</div>
        </div>

        <div className="stat">
          <div className="stat-value text-white">200+</div>
          <div className="stat-desc text-white">Premium Tools</div>
        </div>

        <div className="stat">
          <div className="stat-title text-white">4.9</div>
          <div className="stat-desc text-white">Rating</div>
        </div>
      </div>
    </div>
  );
};

export default Stat;
