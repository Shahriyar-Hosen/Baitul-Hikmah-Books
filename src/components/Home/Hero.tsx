import { memo } from "react";

const Hero = memo(() => (
  <section className="bg-white text-gray-40 pb-5">
    <div className="w-[90%] mx-auto xl:w-full flex flex-col-reverse lg:flex-row justify-center items-center gap-[35px]">
      <div className="flex flex-col justify-center items-center lg:items-start">
        <div className="flex flex-col  items-center lg:items-start justify-start gap-[16px]">
          <div className="flex flex-col  items-center lg:items-start justify-center gap-[24px]">
            <p className="relative font-semibold text-center lg:text-start">
              Let’s make the best investments
            </p>
            <div className="relative inline-block text-[55px] text-gray-40">
              <p className="text-center lg:text-start">
                <span className="text-[50px] font-normal-text-bold ">The</span>
                <span className="font-extrabold text-orange-60">
                  {" "}
                  Baitul Hikmah
                </span>
              </p>
              <p className="text-[50px] text-center lg:text-start">
                <span className="text-53xl">eBook</span> Library
              </p>
            </div>
          </div>
          <p className="text-base text-center lg:text-start">
            Browse from the largest collection of ebooks <br />
            Read stories from anywhere, at anytime.
          </p>
        </div>
        <div className="px-[14px] py-2.5 border border-[#B0B1B1] flex justify-between items-center gap-2.5 rounded-xl mt-10 lg:mt-[100px]">
          <input
            type="text"
            className="px-1 w-full border-red-500 focus:outline-none"
          />
          <button className="text-base px-6 py-2.5 rounded-[13px] bg-[#FF630B] text-white cursor-pointer">
            Search
          </button>
        </div>
      </div>
      <div>
        <img
          className="relative w-full max-w-[687.14px]"
          alt=""
          src="/frame-60173.svg"
        />
      </div>
    </div>
  </section>
));

export default Hero;
