"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import "./carousel_images.json";
import { useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  // const [carousel, setCarousel] = useState<{ image: string }[]>([]);
  const [newUser, setNewUser] = useState<boolean>(true);
  const [existingUser, setExistingUser] = useState<boolean>(false);
  return (
    <>
      {/* <div
        id="default-carousel"
        className="relative w-full"
        data-carousel="slide"
      >
        
        <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
          
          <div
            className="hidden duration-700 ease-in-out"
            data-carousel-item=""
          >
            <img
              src="/Centurion_Digital_Website_Banner.jpg"
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
          
          <div
            className="hidden duration-700 ease-in-out"
            data-carousel-item=""
          >
            <img
              src="/docs/images/carousel/carousel-2.svg"
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
          
          <div
            className="hidden duration-700 ease-in-out"
            data-carousel-item=""
          >
            <img
              src="/docs/images/carousel/carousel-3.svg"
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
          
          <div
            className="hidden duration-700 ease-in-out"
            data-carousel-item=""
          >
            <img
              src="/docs/images/carousel/carousel-4.svg"
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
          <div
            className="hidden duration-700 ease-in-out"
            data-carousel-item=""
          >
            <img
              src="/docs/images/carousel/carousel-5.svg"
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
        </div>
        
        <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="true"
            aria-label="Slide 1"
            data-carousel-slide-to={0}
          />
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 2"
            data-carousel-slide-to={1}
          />
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 3"
            data-carousel-slide-to={2}
          />
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 4"
            data-carousel-slide-to={3}
          />
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 5"
            data-carousel-slide-to={4}
          />
        </div>
        
        <button
          type="button"
          className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev=""
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next=""
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div> */}
      <div className="mb-4 mt-[105px] overflow-x-hidden w-full">
        <Carousel plugins={[Autoplay({ delay: 2000 })]}>
          <CarouselContent>
            <CarouselItem>
              <Card className="">
                <CardContent className="w-full h-full bg-center">
                  <a href="#">
                    <img
                      src="/Centurion_Digital_Website_Banner.jpg"
                      alt="..."
                      className="w-full h-full object-cover"
                    />
                  </a>
                </CardContent>
              </Card>
            </CarouselItem>
            <CarouselItem>
              <Card className="p-0">
                <CardContent className="w-full h-full bg-center">
                  <a href="#">
                    <img
                      className="w-full h-full object-cover"
                      src="/PS_Plus_Digital_Ver 02_Website_Banner.jpg"
                      alt="..."
                    />
                  </a>
                </CardContent>
              </Card>
            </CarouselItem>
            <CarouselItem>
              <Card className="">
                <CardContent className="w-full h-full bg-center">
                  <a href="#">
                    <img
                      src="/Website_Banner_Agency_Channel-1440x918px-v3-01.jpg"
                      alt="..."
                      className="w-full h-full object-cover"
                    />
                  </a>
                </CardContent>
              </Card>
            </CarouselItem>
            <CarouselItem>
              <Card className="">
                <CardContent className="w-full h-full bg-center">
                  <a href="#">
                    <img
                      src="/You_Matter_Digital V03_Website_Banner.jpg"
                      alt="..."
                      className="w-full h-full object-cover"
                    />
                  </a>
                </CardContent>
              </Card>
            </CarouselItem>
          </CarouselContent>
          <CarouselNext />
          <CarouselPrevious />
        </Carousel>
      </div>
      {/* div for buttons */}
      <div className="text-center">
        <button
          onClick={() => {
            setNewUser(true);
            setExistingUser(false);
          }}
          className={`p-3 px-9  bg-slate-100 text-[#6c6d7099] font-bold focus:text-[#337ab7] ${
            newUser == true ? "focus:bg-white" : ""
          }`}
        >
          NEW USER
        </button>
        <button
          onClick={() => {
            setExistingUser(true);
            setNewUser(false);
          }}
          className="p-3 px-9 focus:bg-white bg-slate-100 text-[#6c6d7099] font-bold focus:text-[#337ab7]"
        >
          EXISTING USER
        </button>
      </div>
      {/* Working of the divs when button is clicked */}
      {newUser && (
        <div className="text-center mt-10 px-[260px] mb-6 py-9">
          <div className="font-extrabold text-3xl ">
            <span className="text-[#337ab7]">WHY CHOOSE </span>
            <span className="text-[#ed412d]">LIFE INSURANCE?</span>
          </div>
          <div className="text-sm mt-3">
            You're in a good place today. Your family's happy. Work is going
            well. Everything seems to be going according to plan. But, like they
            say, the only thing you can be sure about in life is its
            unpredictability.
          </div>
          <div className="text-sm mt-3 my-6">
            With life insurance, you can ensure that your loved ones are taken
            care of in case something unexpected happens tomorrow. So, do the
            smart thing. Invest in the future of those who mean the world to
            you. There’s immense peace of mind in knowing you’ve got them
            covered.
          </div>
          <a
            href="/products"
            className="m-4 font-bold flex justify-center items-center text-[#ed412d] px-2 group hover:font-bold"
          >
            <span>KNOW MORE</span>
            <span className="pl-1 group-hover:translate-x-5 duration-300">
              <svg
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="10px"
                y="10px"
                viewBox="0 0 47.3 80.46"
                xmlSpace="preserve"
                className="inline-block h-3 w-3 "
              >
                <style type="text/css">
                  {
                    "\n        .st0 {\n            fill: #ed412d;\n        }\n\n    "
                  }
                </style>
                <polygon
                  className="st0"
                  points="0,80.46 7.07,80.46 47.3,40.23 7.07,0 0,0 40.23,40.23 "
                />
              </svg>
            </span>
          </a>
        </div>
      )}
      {existingUser && (
        <div className="text-center mt-10 px-[260px] mb-6 py-9">
          <div className="font-extrabold text-3xl">
            <span className="text-[#337ab7]">SERVICES FOR YOUR </span>
            <span className="text-[#ed412d]">PEACE OF MIND</span>
          </div>
          <div className="flex flex-row justify-center items-center pt-9">
            <div className="flex flex-col items-center justify-center mx-8 group">
              <img
                src="/login-to-customer-portal.svg"
                className="h-[60px] w-[60px]"
                alt="Login to customer portal"
              />
              <a href="#">
                <div className="font-semibold text-[#337ab7] text-lg mt-3 group-hover:text-[#ed412d]">
                  Login to
                </div>
                <div className="font-semibold text-[#337ab7] text-lg mt-0 group-hover:text-[#ed412d]">
                  Customer Portal
                </div>
              </a>
            </div>
            <div className="flex flex-col items-center justify-center mx-8 group duration-300">
              <img
                src="/pay-premium.svg"
                className="h-[60px] w-[60px]"
                alt="Login to customer portal"
              />
              <a href="#">
                <div className="font-semibold text-[#337ab7] text-lg mt-3 group-hover:text-[#ed412d]">
                  Pay
                </div>
                <div className="font-semibold text-[#337ab7] text-lg group-hover:text-[#ed412d]">
                  Premium
                </div>
              </a>
            </div>
            <div className="flex flex-col items-center justify-center mx-8 group duration-300">
              <img
                src="/download-statement.svg"
                className="h-[60px] w-[60px]"
                alt="Login to customer portal"
              />
              <a href="#">
                <div className="font-semibold text-[#337ab7] text-lg mt-3 group-hover:text-[#ed412d]">
                  Download
                </div>
                <div className="font-semibold text-[#337ab7] text-lg group-hover:text-[#ed412d]">
                  Statement
                </div>
              </a>
            </div>
            <div className="flex flex-col items-center justify-center mx-8 group duration-300">
              <img
                src="/view-funds.svg"
                className="h-[60px] w-[60px]"
                alt="Login to customer portal"
              />
              <a href="#">
                <div className="font-semibold text-[#337ab7] text-lg mt-3 group-hover:text-[#ed412d]">
                  View
                </div>
                <div className="font-semibold text-[#337ab7] text-lg group-hover:text-[#ed412d]">
                  Funds
                </div>
              </a>
            </div>
            <div className="flex flex-col items-center justify-center mx-8 group duration-300">
              <img
                src="/register-a-claim.svg"
                className="h-[60px] w-[60px]"
                alt="Login to customer portal"
              />
              <a href="#">
                <div className="font-semibold text-[#337ab7] text-lg mt-3 group-hover:text-[#ed412d]">
                  Register
                </div>
                <div className="font-semibold text-[#337ab7] text-lg group-hover:text-[#ed412d]">
                  a Claim
                </div>
              </a>
            </div>
          </div>
        </div>
      )}
      {/* Blue Wallpaper part */}
      <div className="bg-[url(../../public/financial-goal-bg.jpg)] bg-cover bg-center bg-no-repeat pb-[50px]">
        <div className="text-center pt-16">
          <div className="text-3xl font-extrabold text-white">
            START CALCULATING FOR YOUR FINANCIAL GOALS
          </div>
          <div className="text-white m-3">
            Here are some interactive tools and calculators to help you plan
            your future effectively
          </div>
        </div>
        <div className="flex flex-row justify-center items-center mt-14">
          <div className="text-center justify-center px-12">
            <img
              src="/calculate-your-insurance-needs.svg"
              alt=".."
              className="h-[65px] pl-8"
            />
            <div className="flex flex-row justify-center items-center group">
              <a href="#">
                <div className="text-white mt-3 font-bold">
                  <div>Calculate Your</div>
                  <div>insurance needs</div>
                </div>
              </a>
              <div>
                <svg
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="10px"
                  y="10px"
                  viewBox="0 0 47.3 80.46"
                  xmlSpace="preserve"
                  className="inline-block h-3 w-3 ml-2 group-hover:translate-x-5 duration-300"
                >
                  <style type="text/css">
                    {
                      "\n        .st0 {\n            fill: #FFFFFF;\n        }\n\n    "
                    }
                  </style>
                  <polygon
                    className="st0"
                    points="0,80.46 7.07,80.46 47.3,40.23 7.07,0 0,0 40.23,40.23 "
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="text-center justify-center px-12">
            <img
              src="/plan-your-childs-education.svg"
              alt=".."
              className="h-[65px] pl-8"
            />
            <div className="flex flex-row justify-center items-center group">
              <div className="text-white mt-3 font-bold">
                <a href="#">
                  <div>Plan Your</div>
                  <div>Child's Education</div>
                </a>
              </div>
              <div>
                <svg
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="10px"
                  y="10px"
                  viewBox="0 0 47.3 80.46"
                  xmlSpace="preserve"
                  className="inline-block h-3 w-3 ml-2 group-hover:translate-x-5 duration-300"
                >
                  <style type="text/css">
                    {
                      "\n        .st0 {\n            fill: #FFFFFF;\n        }\n\n    "
                    }
                  </style>
                  <polygon
                    className="st0"
                    points="0,80.46 7.07,80.46 47.3,40.23 7.07,0 0,0 40.23,40.23 "
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="text-center justify-center px-12">
            <img
              src="/plan-your-retirement.svg"
              alt=".."
              className="h-[65px]"
            />
            <div className="flex flex-row justify-center items-center group">
              <div className="text-white mt-3 font-bold">
                <a href="#">
                  <div>Plan Your</div>
                  <div>Retirement</div>
                </a>
              </div>
              <div>
                <svg
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="10px"
                  y="10px"
                  viewBox="0 0 47.3 80.46"
                  xmlSpace="preserve"
                  className="inline-block h-3 w-3 ml-2 group-hover:translate-x-5 duration-300"
                >
                  <style type="text/css">
                    {
                      "\n        .st0 {\n            fill: #FFFFFF;\n        }\n\n    "
                    }
                  </style>
                  <polygon
                    className="st0"
                    points="0,80.46 7.07,80.46 47.3,40.23 7.07,0 0,0 40.23,40.23 "
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
