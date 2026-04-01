import React from "react";

const WorkFlow = () => {
  return (
    <div className=" bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white px-6  mt-20 py-40">
      <div className="text-center mx-auto space-y-5">
        <h2 className="text-3xl font-bold">
          Ready to Transform Your Workflow?
        </h2>
        <p className="mt-2 opacity-60">
          Join thousands of professionals who are already using DigitTools to
          work smarter. Start your free trial today
        </p>
        <div className="space-x-5 mt-6 ">
          <button className="border rounded-full my-2 bg-white p-2 text-[#9514FA]">
            Explore More
          </button>
          <button className="border border-white rounded-full  p-2 text-white">
           <a href="#">View Pricing</a>
          </button>
          <p className="text-sm opacity-60">14-day free trial • No credit card required • Cancel anytime</p>
        </div>
      </div>
    </div>
  );
};

export default WorkFlow;
