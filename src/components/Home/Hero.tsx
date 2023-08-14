import { memo } from "react";
import BtnPrimaryRounded from "./BtnPrimaryRounded";

const Hero = memo(() => {
  return (
    <div className="relative bg-white w-full overflow-hidden flex flex-col items-end justify-center text-left text-xl text-gray-40 font-normal-text-bold">
      <div className="self-stretch bg-white overflow-hidden shrink-0 flex flex-col py-0 px-[81px] box-border items-center justify-center gap-[72px]">
        <div className="w-full max-w-[1201px] mx-auto flex flex-row items-center justify-start gap-[35px]">
          <div className="flex flex-col items-center justify-start gap-[100px]">
            <div className="flex flex-col items-start justify-start gap-[16px]">
              <div className="flex flex-col items-start justify-start gap-[24px]">
                <div className="relative font-semibold">
                  Let’s make the best investments
                </div>
                <div className="relative inline-block w-[494px] h-[222px] shrink-0 text-[77px] text-orange-60">
                  <p className="m-0">
                    <span className="text-53xl font-normal-text-bold text-gray-40">
                      The
                    </span>
                    <span className="font-extrabold">
                      <span className="text-[72.18px] text-black">{` `}</span>
                      <span>Baitul Hikmah</span>
                    </span>
                  </p>
                  <p className="m-0 text-53xl text-gray-40">
                    <span>
                      <span className="text-53xl">eBook</span>
                      <span className="text-[72.18px]">{` `}</span>
                      <span>Library</span>
                    </span>
                  </p>
                </div>
              </div>
              <div className="relative text-base">
                <p className="m-0">
                  Browse from the largest collection of ebooks
                </p>
                <p className="m-0">Read stories from anywhere, at anytime.</p>
              </div>
            </div>
            <div className="rounded-xl flex flex-col py-2.5 px-3.5 items-start justify-start border-[1px] border-solid border-gray-20">
              <div className="flex flex-row items-center justify-start gap-[97px]">
                <input
                  className="[border:none] font-normal-text-bold text-sm bg-[transparent] relative text-gray-20 text-center"
                  type="text"
                  placeholder="Search by book title, author name"
                />
                <BtnPrimaryRounded
                  pRIMARY="Search"
                  btnPrimaryRoundedWidth="109px"
                  btnPrimaryRoundedCursor="pointer"
                  btnPrimaryRoundedBorder="none"
                  btnPrimaryRoundedPadding="0"
                  btnPrimaryRoundedBackgroundColor="transparent"
                  pRIMARYLeft="22.65%"
                  pRIMARYDisplay="inline-block"
                />
              </div>
            </div>
          </div>
          <img
            className="relative w-[687.14px] h-[726px]"
            alt=""
            src="/frame-60173.svg"
          />
        </div>
      </div>
    </div>
  );
});

export default Hero;
