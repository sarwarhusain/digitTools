import React from "react";

const WorkFlow = () => {
  return (
    <div className=" bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white px-6  mt-20 py-12">
      <div className="text-center mx-auto">
        <h2 className="text-3xl font-bold">
          Ready to Transform Your Workflow?
        </h2>
        <p className="mt-2">
          Join thousands of professionals who are already using DigitTools to
          work smarter. Start your free trial today
        </p>
        <div className="gap-3 mt-6">
          <button className="border rounded-full bg-white p-2 text-[#9514FA]">
            Explore More
          </button>
          <button className="border border-white rounded-full  p-2 text-white">
            View Pricing
          </button>
        </div>
      </div>
    </div>
  );
};

export default WorkFlow;
