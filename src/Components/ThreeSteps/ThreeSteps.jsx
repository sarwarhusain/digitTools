import React from "react";

import userImg from "../../assets/user.png";
import packageImg from "../../assets/package.png";
import startImg from "../../assets/rocket.png";
const ThreeSteps = () => {
  return (
    <section className="bg-gray-100 py-16 mt-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">Get Started In 3 Steps</h2>
        <p className="text-gray-500 mt-2">
          Start using premium digital tools in minutes, not hours.
        </p>
      </div>

      {/* card */}
      <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto px-3">
        <div className="bg-white p-8 rounded-2xl shadow-sm relative text-center">
          <div className="absolute top-4 right-5 bg-purple-500 text-white text-xs w-8 h-8 flex items-center justify-center rounded-full">
            01
          </div>

          <div className="w-20 h-20 mx-auto mb-6 bg-purple-100 rounded-full flex items-center justify-center">
            <img src={userImg} alt="user" className="w-10 h-10" />
          </div>

          <h3 className="text-lg font-semibold mb-2">Create Account</h3>
          <p className="text-gray-500 text-sm">
            Simple and fast registration process.
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-sm relative text-center">
          <div className="absolute top-4 right-5 bg-purple-500 text-white text-xs w-8 h-8 flex items-center justify-center rounded-full">
            02
          </div>

          <div className="w-20 h-20 mx-auto mb-6 bg-purple-100 rounded-full flex items-center justify-center">
            <img src={packageImg} alt="user" className="w-10 h-10" />
          </div>

          <h3 className="text-lg font-semibold mb-2">Choose Products</h3>
          <p className="text-gray-500 text-sm">
            Browse our catalog and select the tools that fit your needs.
          </p>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-sm relative text-center">
          <div className="absolute top-4 right-5 bg-purple-500 text-white text-xs w-8 h-8 flex items-center justify-center rounded-full">
            03
          </div>

          <div className="w-20 h-20 mx-auto mb-6 bg-purple-100 rounded-full flex items-center justify-center">
            <img src={startImg} alt="user" className="w-10 h-10" />
          </div>

          <h3 className="text-lg font-semibold mb-2">Start Creating</h3>
          <p className="text-gray-500 text-sm">
            Download and start using your premium tools immediately.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ThreeSteps;
