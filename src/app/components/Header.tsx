"use client";

import React, { useState } from "react";
import "./header.css";

export default function Header() {
  const [open, setOpen] = useState<boolean>(false);
  const [firstDropdown, setFirstDropdown] = useState<boolean>(false);
  const [firstSubMenu, setFirstSubMenu] = useState<boolean>(false);
  const [secondSubMenu, setSecondSubMenu] = useState<boolean>(false);

  return (
    <>
      <header
        className={`flex flex-row justify-evenly md:justify-center items-start fixed z-50 w-full top-0 pb-3 bg-white ${
          open
            ? "justify-center h-[105px]"
            : "justify-evenly w-full h-[60px] shadow-lg"
        }`}
      >
        <div className="">
          <a href="/">
            <img
              className={`${open ? "w-[170px] mt-3" : "w-[150px] mt-1"}`}
              src="logo.png"
              alt="SUD"
              width={"170px"}
            />
          </a>
        </div>
        <div
          className={`flex flex-col items-end justify-end overflow-hidden md:overflow-visible md:top-0 ${
            open ? "md:px-14 justify-center" : "md:pl-[394px] md:pr-14"
          }`}
        >
          <div className="mx-2 bg-[#f5f5f5] p-2 rounded-md">
            <button className="bg-[#337ab7] p-2 text-white font-bold px-3 rounded-md mr-2">
              Pay Premium
            </button>
            <button className="bg-[#ed412d] p-2 text-white font-bold px-3 hover:bg-[#337ab7] rounded-md mr-2">
              Buy Online
            </button>
            <span className="px-2 font-bold text-[#6c6d7099] text-[12px]">
              GET A QUICK QUOTE FOR
            </span>
            <span className="text-[#6c6d7099] text-sm">|</span>
            <select
              name="selectOption"
              id="selectOption"
              className="px-2 bg-[#f5f5f5] text-[#337ab7] font-bold text-[12px] ml-2 rounded-md"
            >
              <option value="/">PROTECTION PLAN</option>
              <option value="/">PROTECTION PLAN</option>
              <option value="/">PROTECTION PLAN</option>
              <option value="/">PROTECTION PLAN</option>
              <option value="/">PROTECTION PLAN</option>
            </select>
            <button className="p-2 px-4 bg-[#6c6d70] text-white font-bold rounded-md ml-2">
              GO
            </button>
          </div>
          {open && (
            <div className="mt-4 text-[#337ab7] font-semibold flex text-[15px]">
              <a className="px-4 hover:border-b-2 hover:border-[#337ab7] cursor-pointer relative">
                <span
                  onMouseEnter={() => {
                    setFirstDropdown(true);
                  }}
                >
                  BUY ONLINE
                </span>
                <div
                  className={`overflow-hidden max-h-0 transition-[max-height] duration-500 -left-[30px] ${
                    firstDropdown ? "max-h-[500px] " : ""
                  } absolute left-0 mt-[10px] bg-[#f5f7fa] text-gray-500 w-72 pl-5 shadow-md`}
                  onMouseLeave={() => {
                    setFirstDropdown(false);
                  }}
                >
                  <ul className="p-4">
                    <li>
                      <span
                        onMouseEnter={() => {
                          setFirstSubMenu(true);
                        }}
                        className="py-2 duration-300 cursor-pointer"
                      >
                        INVESTMENT(ULIP) & SAVINGS
                      </span>
                      <div
                        className={`overflow-hidden max-h-0 transition-[max-height] duration-500 ${
                          firstSubMenu ? "max-h-[300px]" : ""
                        } pl-5 sub-menu`}
                      >
                        <ul
                          onMouseLeave={() => {
                            setFirstSubMenu(false);
                          }}
                          className="flex flex-col text-[#ed412d]"
                        >
                          <li className="py-2">SUD LIFE CENTURY STAR</li>
                          <li className="py-2">SUD LIFE E-WEALTH</li>
                          <li className="py-2">POS-SUD LIFE SANCHAY</li>
                          <li className="py-2">SUD LIFE FORTUNE ROYALE</li>
                          <li className="py-2">SUD LIFE CENTURY GOLD</li>
                          <li className="py-2">SUD LIFE CENTURY PLUS</li>
                          <li className="py-2">SUD LIFE CENTURION</li>
                        </ul>
                      </div>
                    </li>
                    <li className="py-2 duration-300">
                      <span
                        onMouseEnter={() => {
                          setSecondSubMenu(true);
                        }}
                      >
                        RETIREMENT & LONG TERM REGULAR INCOME
                      </span>
                      <div
                        className={`overflow-hidden max-h-0 transition-[max-height] duration-500 ${
                          secondSubMenu ? "max-h-[300px]" : ""
                        } pl-5 sub-menu`}
                      >
                        <ul
                          onMouseLeave={() => {
                            setSecondSubMenu(false);
                          }}
                          className="flex flex-col text-[#ed412d]"
                        >
                          <li className="py-2">SUD LIFE CENTURY ROYALE</li>
                          <li className="py-2">SUD LIFE RETIREMENT ROYALE</li>
                          <li className="py-2">SUD LIFE CENTURY INCOME</li>
                        </ul>
                      </div>
                    </li>
                    <li className="py-2 hover:text-[#ed412d] duration-300">
                      PROTECTION PLAN
                    </li>
                    <li className="py-2 hover:text-[#ed412d] duration-300">
                      HEALTH PLAN
                    </li>
                  </ul>
                </div>
              </a>
              <a
                href="#"
                className="px-4 hover:border-b-2 hover:border-[#337ab7]"
              >
                PRODUCTS
              </a>
              <a
                href="#"
                className="px-4 hover:border-b-2 hover:border-[#337ab7]"
              >
                ABOUT US
              </a>
              <a
                href="#"
                className="px-4 hover:border-b-2 hover:border-[#337ab7]"
              >
                CUSTOMER SERVICE
              </a>
              <a
                href="#"
                className="px-4 hover:border-b-2 hover:border-[#337ab7]"
              >
                CLAIMS
              </a>
              <a
                href="#"
                className="px-4 hover:border-b-2 hover:border-[#337ab7]"
              >
                CAREERS
              </a>
              <a
                href="#"
                className="px-4 hover:border-b-2 hover:border-[#337ab7]"
              >
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
        <button
          onClick={() => {
            setOpen(!open);
          }}
          className={`block w-[60px] h-[60px] bg-[#ed412d] relative p-4 group overflow-hidden max-height-[60px] ${
            open ? "max-height-[105px]" : ""
          }`}
        >
          <span className="h-[2px] w-[24px] bg-[#ecf0f1] block absolute top-[18px]"></span>
          <span className="h-[2px] w-[18px] bg-[#ecf0f1] block top-[48%] absolute group-hover:w-[24px] duration-300"></span>
          <span className="h-[2px] w-[12px] bg-[#ecf0f1] block top-[40px] absolute group-hover:w-[24px] duration-300"></span>
        </button>
      </header>
    </>
  );
}
