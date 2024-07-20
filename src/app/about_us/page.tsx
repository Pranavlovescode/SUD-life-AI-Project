import React from "react";

export default function page() {
  return (
    <>
      <div className="mt-[60px] bg-[url(/about-banner.jpg)] h-[400px] bg-cover bg-center bg-no-repeat mx-auto">
        <span className="ml-[278px] text-[54px] w-[500px] absolute mt-[65px] text-white font-extrabold">
          INVEST NOW FOR A SECURED TOMORROW
        </span>
      </div>
      <div className="flex flex-col justify-center items-center text-center mt-[50px] px-[260px] h-[400px] mb-[60px]">
        <div>
          <span className="text-[#337ab7] font-extrabold text-3xl">ABOUT </span>
          <span className="text-[#ed412d] font-extrabold text-3xl">
            SUDLIFE
          </span>
        </div>
        <div className="mt-4 text-sm text-gray-600">
          Founded in 2009, Star Union Dai-ichi Life Insurance (SUD Life) is a
          joint venture between two of India's leading public sector banks, Bank
          of India and Union Bank of India, and Dai-ichi Life Holdings, a
          leading life insurance company in Japan.
        </div>
        <div className="mt-4 text-sm text-gray-600">
          With a robust collective network of over 15,000 bank branches catering
          to more than 9.2 million customers, SUD Life has one of the largest
          life insurance distribution footprints in India. Bank of India and
          Union Bank of India have sponsored select Regional Rural Banks, which
          provides SUD Life access to more than 1950 branches that make life
          insurance products available in rural areas.
        </div>
        <div className="mt-4 text-sm text-gray-600">
          Established in 1902, Dai-ichi Life is the second largest life
          insurance company of Japan and is one of the top ten life insurers
          globally, renowned for sound product knowledge, superior asset
          management skills, and strong operational capabilities to manage life
          insurance businesses.
        </div>
        <div className="mt-4 text-sm text-gray-600">
          At SUD Life, our customers are our priority. We are committed to
          providing insurance products that serve our customers’ unique needs
          across various strata of society and geographies.
        </div>
        <div className="mt-4 text-sm text-gray-600">
          The promoters of SUD Life have a long-term commitment towards their
          customers and stakeholder. These strengths and values have been
          inherited by SUD Life, as we make our way to becoming the next rising
          star in the Indian life insurance business, promising exceptional
          value to all.
        </div>
      </div>
      <div className="text-center">
        <span className="text-[#337ab7] font-extrabold text-3xl text-center">
          OUR VISION, MISSION, PHILOSOPHY{" "}
        </span>
        <span className="text-[#ed412d] font-extrabold text-3xl text-center">& VALUES</span>
        <div className="flex flex-row justify-center items-center text-start mt-14">
          <div className="flex flex-col bg-gray-100 p-4 w-[250px] mx-3 py-7">
            <img src="/vision.svg" alt="svg_file" className="h-[50px] w-[50px]" />
            <br />
            <span className="text-[#337ab7] font-semibold text-xl">
              Vision
            </span>
            <br />
            <p>Protecting Families,</p>            
            <p>Enriching Lives!</p>
          </div>
          <div className="flex flex-col bg-gray-100 p-4 w-[280px] mx-3 py-7">
            <img src="/Mission.svg" alt="svg_file" className="h-[50px] w-[50px]" />
            <br />
            <span className="text-[#337ab7] font-semibold text-xl">
              Mission
            </span>
            <br />
            <p>To be the Trustworthy Lifelong</p>            
            <p>Insurance Partner</p>
          </div>
          <div className="flex flex-col bg-gray-100 p-4 w-[280px] mx-3">
            <img src="/philosophy.svg" alt="svg_file" className="h-[50px] w-[50px]" />
            <br />
            <span className="text-[#337ab7] font-semibold text-xl">
              Philosophy
            </span>
            <br />
            <p>Converting Transactional</p>            
            <p>Relationships into Subscriptional</p>
            <p>Relationships</p>
          </div>
          <div className="flex flex-col bg-gray-100 p-4 w-[250px] mx-3 py-7">
            <img src="/values.svg" alt="svg_file" className="h-[50px] w-[50px]" />
            <br />
            <span className="text-[#337ab7] font-semibold text-xl">
              Values
            </span>
            <br />
            <p>Empathy, Collaboration,</p>            
            <p>Humility, Ownership</p>
          </div>
        </div>
      </div>
    </>
  );
}