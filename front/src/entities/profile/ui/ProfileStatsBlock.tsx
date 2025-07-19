import React from "react";

export const ProfileStatsBlock = () => (
  <div className="flex justify-between w-full mt-3 mb-2 text-center">
    <div className="flex-1 flex flex-col gap-1">
      <div className="text-[24px] leading-[22px] tracking-[-0.43px] font-bold text-center align-middle">
        1 месяц
      </div>
      <div className="text-[18px] leading-[22px] tracking-[-0.45px] text-[#434343] text-center align-middle font-normal ">
        в игруме
      </div>
    </div>
    <div className="flex-1 flex flex-col gap-1" >
      <div className="text-[24px] leading-[22px] tracking-[-0.43px] font-bold text-center align-middle">
        15
      </div>
      <div className="text-[18px] leading-[22px] tracking-[-0.45px] text-[#434343] text-center align-middle font-normal ">
        встреч
      </div>
    </div>
    <div className="flex-1 flex flex-col gap-1">
      <div className="text-[24px] leading-[22px] tracking-[-0.43px] font-bold text-center align-middle">
        350
      </div>
      <div className="text-[18px] leading-[22px] tracking-[-0.45px] text-[#434343] text-center align-middle font-normal ">

        румеров
      </div>
    </div>
  </div>
);
