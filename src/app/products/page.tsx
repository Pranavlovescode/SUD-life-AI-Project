"use client"

import React from "react";

export default function page() {
  return (
    <>
      <div className="mt-[60px] bg-[url(/hero-prolanding-banner.jpg)] h-[400px] bg-cover bg-center bg-no-repeat mx-auto">
        <span className="ml-[278px] text-[54px] w-[500px] absolute mt-[65px] text-white font-extrabold">
          INVEST NOW FOR A SECURED TOMORROW
        </span>
      </div>
      <div className="h-[700px]">
        <div className="text-center my-[50px] px-[260px]">
          <span className="text-3xl font-extrabold text-[#337ab7]">
            A PLEASENT{" "}
          </span>
          <span className="text-3xl font-extrabold text-[#ed412d]">
            PRESENT
          </span>
          <div className="mt-4 text-sm text-gray-600">
            Fulfil the promise of a secure future without unnecessary pressure
            on the present. Trust our thoughtfully designed plans to ease your
            way through life, without any compromises. They come with:
          </div>
        </div>
        <div className="flex flex-row justify-center items-center">
          <div className="flex flex-row justify-center items-center">
            <div className="px-10">
              <img
                src="/pay-premium.svg"
                className="h-[60px] w-[60px] ml-20 mb-6"
                alt="pay_premium"
              />
              <span className="text-xl font-bold text-[#337ab7] hover:text-[#ed412d] duration-300">Flexible Payment Options</span>
            </div>
            <div className="px-10">
              <img
                src="/flexible-policy-terms.svg"
                className="h-[60px] w-[60px] ml-20 mb-6"
                alt="flexible-policy-terms"
              />
              <span className="text-xl font-bold text-[#337ab7] hover:text-[#ed412d] duration-300">Considerate Policy Terms</span>
            </div>
            <div className="px-10">
              <img
                src="/affordable-premiums.svg"
                className="h-[60px] w-[60px] ml-20 mb-6"
                alt="affordable premiums"
              />
              <span className="text-xl font-bold text-[#337ab7] hover:text-[#ed412d] duration-300">Affordable Premiums</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
