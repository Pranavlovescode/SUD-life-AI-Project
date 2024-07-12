"use client"

import React, { useState } from "react";
import './header.css'
export default function Header() {
  const [open, setOpen] = useState<boolean>(true)
  return (
    <>
      <header className="flex flex-row justify-between md:justify-center fixed z-50 w-full">
        <div className="mt-3">
          <a href="/">
            <img src="logo.png" alt="SUD" width={"170px"} />
          </a>
        </div>
        <div className="flex flex-col items-end justify-end px-7">
          <div className="mx-2 bg-[#f5f5f5]">
            <button className="bg-[#337ab7] p-2 text-white font-bold px-3">
              Pay Premium
            </button>
            <button className="bg-[#ed412d] p-2 text-white font-bold px-3 hover:bg-[#337ab7]">
              Buy Online
            </button>
            <span className="px-2 font-bold text-[#6c6d7099] text-sm">
              GET A QUICK QUOTE FOR
            </span>
            <span className="text-[#6c6d7099] text-sm">|</span>
            <select
              name="selectOption"
              id="selectOption"
              className="px-2 bg-[#f5f5f5] text-[#337ab7] font-bold text-sm"
            >
              <option value="/">PROTECTION PLAN</option>
              <option value="/">PROTECTION PLAN</option>
              <option value="/">PROTECTION PLAN</option>
              <option value="/">PROTECTION PLAN</option>
              <option value="/">PROTECTION PLAN</option>
            </select>
            <button className="p-2 px-4 bg-[#6c6d70] text-white font-bold">
              GO
            </button>
          </div>
          {open && (
            <div className="mt-4 text-[#337ab7] font-semibold flex">
            <a href="#" className="px-4">
              BUY ONLINE
            </a>
            <a href="#" className="px-4">
              PRODUCTS
            </a>
            <a href="#" className="px-4">
              ABOUT US
            </a>
            <a href="#" className="px-4">
              CUSTOMER SERVICE
            </a>
            <a href="#" className="px-4">
              CLAIMS
            </a>
            <a href="#" className="px-4">
              CAREERS
            </a>
            <a href="#" className="px-4">
              PARTNER WITH US
            </a>
            <span className="px-4 font-extralight">|</span>
            <div className="flex items-center">
              <span className="px-3">LOGIN</span>
              <img src="/login.svg" alt="login_svg" className="h-4 w-4" />
            </div>
          </div>
          )}
        </div>
        <button onClick={()=>{setOpen(!open)}} className="block w-[60px] h-[60px] bg-[#ed412d] relative p-4 group md:hidden">
          <span className="h-[2px] w-[24px] bg-[#ecf0f1] block absolute top-[18px]"></span>
          <span className="h-[2px] w-[18px] bg-[#ecf0f1] block top-[48%] absolute group-hover:w-[24px] duration-300"></span>
          <span className="h-[2px] w-[12px] bg-[#ecf0f1] block top-[40px] absolute group-hover:w-[24px] duration-300"></span>
        </button>
    
      </header>
    </>
  );
}
