import React from "react";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer class="bg-[#101727] border-t text-white">
      <div class="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div class="grid gap-12 lg:grid-cols-5">
          <div class="lg:col-span-2 space-y-6">
            <div class="text-teal-600">
              <svg class="h-8" viewBox="0 0 28 24" fill="currentColor">
                <path d="M0.41 10.3847C1.14777 7.4194..." />
              </svg>
            </div>

            <div>
              <h2 class="text-2xl font-semibold text-gray-200">DigiTools</h2>
              <p class="mt-3 text-gray-600">
                Premium digital tools for creators, professionals, and
                businesses. Work smarter with our suite of powerful tools.
              </p>
            </div>

            {/* <form class="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                class="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              <p
                type="submit"
                class="btn  rounded-full text-white bg-linear-to-r from-[#7B2FF7] to-[#F107A3] border-none"
              >
                Subscribe
              </p>
            </form> */}
          </div>

          <div class=" grid grid-cols-2 md:grid-cols-5 gap-2  lg:col-span-3">
            <div>
              <p class="font-semibold text-gray-200">Product</p>
              <ul class="mt-4 space-y-3 text-sm text-gray-600">
                <li>
                  <p class="hover:text-teal-600 transition">Featured</p>
                </li>
                <li>
                  <p class="hover:text-teal-600 transition">Pricing</p>
                </li>
                <li>
                  <p class="hover:text-teal-600 transition">Integrations</p>
                </li>
                <li>
                  <p class="hover:text-teal-600 transition">Templates</p>
                </li>
                <li>
                  <p class="hover:text-teal-600 transition">Features</p>
                </li>
              </ul>
            </div>

            <div>
              <p class="font-semibold text-gray-200">Company</p>
              <ul class="mt-4 space-y-3 text-sm text-gray-600">
                <li className="hover:text-teal-600 transition">About</li>
                <li>
                  <p class="hover:text-teal-600 transition">Blog</p>
                </li>
                <li>
                  <p class="hover:text-teal-600 transition">Caress</p>
                </li>
                <li>
                  <p class="hover:text-teal-600 transition">Press</p>
                </li>
              </ul>
            </div>

            <div>
              <p class="font-semibold text-gray-200">Resources</p>
              <ul class="mt-4 space-y-3 text-sm text-gray-600">
                <li>
                  <p class="hover:text-teal-600 transition">DocumentationT</p>
                </li>
                <li>
                  <p class="hover:text-teal-600 transition">Help Center</p>
                </li>
                <li>
                  <p class="hover:text-teal-600 transition">Community</p>
                </li>
                <li>
                  <p class="hover:text-teal-600 transition">Contact</p>
                </li>
              </ul>
            </div>
            {/* social media link */}
            <div className="">
              <p class="font-semibold text-gray-200">Social Media</p>
              <div className="flex gap-4 mt-6">
                <FaFacebookF />
                <FaInstagram />
                <FaXTwitter />
              </div>
            </div>
          </div>
        </div>

        <div class="mt-12 border-t pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p class="text-sm text-gray-500">
            © 2026 Smith. All rights reserved.
          </p>

          <div class="flex gap-4">
            <p class="text-gray-500 hover:text-teal-600 transition">Facebook</p>
            <p class="text-gray-500 hover:text-teal-600 transition">
              Instagram
            </p>
            <p class="text-gray-500 hover:text-teal-600 transition">Twitter</p>
            <p class="text-gray-500 hover:text-teal-600 transition">GitHub</p>
          </div>

          <div class="flex gap-4 text-sm">
            <p class="text-gray-500 hover:text-teal-600 transition">Terms</p>
            <p class="text-gray-500 hover:text-teal-600 transition">Privacy</p>
            <p class="text-gray-500 hover:text-teal-600 transition">Cookies</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
