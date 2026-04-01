import React from "react";
import { FaCheck } from "react-icons/fa6";

const Transparent = () => {
  return (
    <div className="mt-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">Simple, Transparent Pricing</h2>
        <p className="text-gray-500 mt-2">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>
      </div>
      {/* */}
      <div className=" container mx-auto grid grid-cols-1 md:grid-cols-3 gap-3">
        <div className="card w-96 shadow-sm bg-gray-100 rounded-3xl ">
          <div className="card-body">
            <div className="">
              <h2 className="text-3xl font-bold">Starter</h2>
              <p className="text-sm">Perfect for getting started</p>
              <p className="text-2xl mt-5">$0/month</p>
            </div>
            <ul className="mt-6 flex flex-col gap-2 text-xs">
              <li className="flex gap-1">
                <FaCheck className="text-green-300" />
                Access to 10 free tools
              </li>
              <li className="flex gap-1">
                <FaCheck className="text-green-300" />
                Basic templates
              </li>
              <li className="flex gap-1">
                <FaCheck className="text-green-300" />
                Community support
              </li>
              <li className="flex gap-1">
                <FaCheck className="text-green-300" />1 project per month
              </li>
            </ul>
            <div className="mt-27">
              <button className="btn w-full rounded-full text-white bg-linear-to-r from-[#7B2FF7] to-[#F107A3] border-none">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="card w-96 shadow-sm bg-gray-100 rounded-3xl ">
          <div className="card-body bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white px-6 py-2 rounded-2xl relative">
            <span className="badge absolute -top-2 right-40 badge-xs badge-warning">
              Most Popular
            </span>
            <div className="">
              <h2 className="text-3xl font-bold">Pro</h2>
              <p>Best for professionals</p>
              <p className="text-2xl mt-5">$29/month</p>
            </div>
            <ul className="mt-6 flex flex-col gap-2 text-xs">
              <li className="flex gap-1">
                <FaCheck className="text-white" />
                Access to all premium tools
              </li>
              <li className="flex gap-1">
                <FaCheck className="text-white" />
                Unlimited templates
              </li>
              <li className="flex gap-1">
                <FaCheck className="text-white" />
                Priority support
              </li>
              <li className="flex gap-1">
                <FaCheck className="text-white" />
                Unlimited projects
              </li>
              <li className="flex gap-1">
                <FaCheck className="text-white" />
                Cloud sync
              </li>
              <li className="flex gap-1">
                <FaCheck className="text-white" />
                Advanced analytics
              </li>
            </ul>
            <div className="mt-18">
              <button className="btn w-full rounded-full text-white bg-linear-to-r from-[#7B2FF7] to-[#F107A3] border-none">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="card w-96 shadow-sm bg-gray-100 rounded-3xl  ">
          <div className="card-body ">
            <div className="">
              <h2 className="text-3xl font-bold">Enterprise</h2>
              <p>For teams and businesses</p>
              <p className="text-2xl mt-5">$99/month</p>
            </div>
            <ul className="mt-6 flex flex-col gap-2 text-xs">
              <li className="flex gap-1">
                <FaCheck className="text-green-300" />
                Everything in Pro
              </li>
              <li className="flex gap-1">
                <FaCheck className="text-green-300" />
                Team collaboration
              </li>
              <li className="flex gap-1">
                <FaCheck className="text-green-300" />
                Custom integrations
              </li>
              <li className="flex gap-1">
                <FaCheck className="text-green-300" />
                Dedicated support
              </li>
              <li className="flex gap-1">
                <FaCheck className="text-green-300" />
                SLA guarantee
              </li>
              <li className="flex gap-1">
                <FaCheck className="text-green-300" />
                Custom branding
              </li>
            </ul>
            <div className="mt-14">
              <button className="btn w-full rounded-full text-white bg-linear-to-r from-[#7B2FF7] to-[#F107A3] border-none">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transparent;
