import { FunctionComponent, useMemo, type CSSProperties } from "react";

type BtnPrimaryRoundedType = {
  pRIMARY?: string;

  /** Style props */
  btnPrimaryRoundedWidth?: CSSProperties["width"];
  btnPrimaryRoundedCursor?: CSSProperties["cursor"];
  btnPrimaryRoundedBorder?: CSSProperties["border"];
  btnPrimaryRoundedPadding?: CSSProperties["padding"];
  btnPrimaryRoundedBackgroundColor?: CSSProperties["backgroundColor"];
  pRIMARYLeft?: CSSProperties["left"];
  pRIMARYDisplay?: CSSProperties["display"];
};

const BtnPrimaryRounded: FunctionComponent<BtnPrimaryRoundedType> = ({
  pRIMARY,
  btnPrimaryRoundedWidth,
  btnPrimaryRoundedCursor,
  btnPrimaryRoundedBorder,
  btnPrimaryRoundedPadding,
  btnPrimaryRoundedBackgroundColor,
  pRIMARYLeft,
  pRIMARYDisplay,
}) => {
  const btnPrimaryRoundedStyle: CSSProperties = useMemo(() => {
    return {
      width: btnPrimaryRoundedWidth,
      cursor: btnPrimaryRoundedCursor,
      border: btnPrimaryRoundedBorder,
      padding: btnPrimaryRoundedPadding,
      backgroundColor: btnPrimaryRoundedBackgroundColor,
    };
  }, [
    btnPrimaryRoundedWidth,
    btnPrimaryRoundedCursor,
    btnPrimaryRoundedBorder,
    btnPrimaryRoundedPadding,
    btnPrimaryRoundedBackgroundColor,
  ]);

  const pRIMARYStyle: CSSProperties = useMemo(() => {
    return {
      left: pRIMARYLeft,
      display: pRIMARYDisplay,
    };
  }, [pRIMARYLeft, pRIMARYDisplay]);

  return (
    <div
      className="relative w-[105px] h-[43px] text-center text-base text-white font-normal-text-bold"
      style={btnPrimaryRoundedStyle}
    >
      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[13px] bg-orange-60" />
      <div
        className="absolute top-[23.26%] left-[17.14%] font-medium"
        style={pRIMARYStyle}
      >
        {pRIMARY}
      </div>
    </div>
  );
};

export default BtnPrimaryRounded;
