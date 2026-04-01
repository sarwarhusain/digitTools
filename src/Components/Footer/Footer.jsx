import React from "react";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#101727] border-t text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2 space-y-6">
            <div className="text-teal-600">
              <svg
                className="h-8"
                viewBox="0 0 28 24"
                fill="currentColor"
              ></svg>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-200">
                DigiTools
              </h2>
              <p className="mt-3 text-gray-600">
                Premium digital tools for creators, professionals, and
                businesses. Work smarter with our suite of powerful tools.
              </p>
            </div>
          </div>

          <div className=" grid grid-cols-2 md:grid-cols-5 gap-2  lg:col-span-3">
            <div>
              <p className="font-semibold text-gray-200">Product</p>
              <ul className="mt-4 space-y-3 text-sm text-gray-600">
                <li>
                  <p className="hover:text-teal-600 transition">Featured</p>
                </li>
                <li>
                  <p className="hover:text-teal-600 transition">Pricing</p>
                </li>
                <li>
                  <p className="hover:text-teal-600 transition">Integrations</p>
                </li>
                <li>
                  <p className="hover:text-teal-600 transition">Templates</p>
                </li>
                <li>
                  <p className="hover:text-teal-600 transition">Features</p>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-semibold text-gray-200">Company</p>
              <ul className="mt-4 space-y-3 text-sm text-gray-600">
                <li className="hover:text-teal-600 transition">About</li>
                <li>
                  <p className="hover:text-teal-600 transition">Blog</p>
                </li>
                <li>
                  <p className="hover:text-teal-600 transition">Caress</p>
                </li>
                <li>
                  <p className="hover:text-teal-600 transition">Press</p>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-semibold text-gray-200">Resources</p>
              <ul className="mt-4 space-y-3 text-sm text-gray-600">
                <li>
                  <p className="hover:text-teal-600 transition">
                    DocumentationT
                  </p>
                </li>
                <li>
                  <p className="hover:text-teal-600 transition">Help Center</p>
                </li>
                <li>
                  <p className="hover:text-teal-600 transition">Community</p>
                </li>
                <li>
                  <p className="hover:text-teal-600 transition">Contact</p>
                </li>
              </ul>
            </div>
            {/* social media link */}
            <div className="">
              <p className="font-semibold text-gray-200">Social Media</p>
              <div className="flex gap-4 mt-6">
                <FaFacebookF />
                <FaInstagram />
                <FaXTwitter />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © 2026 Smith. All rights reserved.
          </p>

          <div className="flex gap-4">
            <p className="text-gray-500 hover:text-teal-600 transition">
              Facebook
            </p>
            <p className="text-gray-500 hover:text-teal-600 transition">
              Instagram
            </p>
            <p className="text-gray-500 hover:text-teal-600 transition">
              Twitter
            </p>
            <p className="text-gray-500 hover:text-teal-600 transition">
              GitHub
            </p>
          </div>

          <div className="flex gap-4 text-sm">
            <p className="text-gray-500 hover:text-teal-600 transition">
              Terms
            </p>
            <p className="text-gray-500 hover:text-teal-600 transition">
              Privacy
            </p>
            <p className="text-gray-500 hover:text-teal-600 transition">
              Cookies
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
