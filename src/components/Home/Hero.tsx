import { memo } from "react";

const Hero = memo(() => (
  <section className="bg-white text-gray-40 w-full flex justify-center items-center gap-[35px]">
    <div>
      <div className="flex flex-col items-start justify-start gap-[16px]">
        <div className="flex flex-col items-start justify-start gap-[24px]">
          <p className="relative font-semibold">
            Let’s make the best investments
          </p>
          <div className="relative inline-block w-[494px] shrink-0 text-[55px] text-gray-40">
            <p>
              <span className="text-[50px] font-normal-text-bold ">The</span>
              <span className="font-extrabold text-orange-60">
                {" "}
                Baitul Hikmah
              </span>
            </p>
            <p className="text-[50px]">
              <span className="text-53xl">eBook</span> Library
            </p>
          </div>
        </div>
        <p className="text-base">
          Browse from the largest collection of ebooks <br />
          Read stories from anywhere, at anytime.
        </p>
      </div>
      <div className="px-[14px] py-2.5 border border-[#B0B1B1] flex justify-between items-center gap-2.5 rounded-xl mt-[100px]">
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
        className="relative w-[687.14px] h-[726px]"
        alt=""
        src="/frame-60173.svg"
      />
    </div>
  </section>
));

export default Hero;
