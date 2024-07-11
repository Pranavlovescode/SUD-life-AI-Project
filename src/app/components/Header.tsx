import React from "react";

export default function Header() {
  return (
    <>
      <header className="flex flex-row justify-between mx-28">
        <div className=" my-2">
          <a href="/">
            <img src="logo.png" alt="SUD" width={"170px"} />
          </a>
        </div>
        <div className="flex flex-col items-end">
          <div className="mx-2 bg-[#f5f5f5]">
            <button className="bg-[#337ab7] p-2 text-white font-bold px-3">Pay Premium</button>
            <button className="bg-[#ed412d] p-2 text-white font-bold px-3 hover:bg-[#337ab7]">Buy Online</button>
            <span className="px-2 font-bold text-[#6c6d7099] text-sm">GET A QUICK QUOTE FOR</span>
            <span className="text-[#6c6d7099] text-sm">|</span>
            <select name="selectOption" id="selectOption" className="px-2 bg-[#f5f5f5] text-[#337ab7] font-bold text-sm">
              <option value="/">PROTECTION PLAN</option>
              <option value="/">PROTECTION PLAN</option>
              <option value="/">PROTECTION PLAN</option>
              <option value="/">PROTECTION PLAN</option>
              <option value="/">PROTECTION PLAN</option>
            </select>
            <button className="p-2 px-4 bg-[#6c6d70] text-white font-bold">GO</button>
          </div>
          <div className="items-baseline mt-3">
            <a href="#">PLANS</a>
            <a href="#">PLANS</a>
            <a href="#">PLANS</a>
            <a href="#">PLANS</a>
            <a href="#">PLANS</a>
            <a href="#">PLANS</a>
          </div>
        </div>
      </header>
    </>
  );
}
