import React from "react";

export const ProfileNameBlock = () => (
  <div className="text-center mb-1 "  >
    <div className="flex items-center mb-3 gap-2">
      <span className="text-center align-middle text-[22px] leading-[28px] tracking-[-0.26px] text-gray-500 font-normal font-[SF Pro]">
        румер:
      </span>
      <span className="text-[28px] leading-[34px] tracking-[0.38px] text-center align-middle font-[SF Pro] font-bold">
        Ваня Петькин
      </span>
    </div>
    <div className="text-sm flex justify-center ml-[-10px] gap-35" style={{ color: '#434343' }}>
      <span>@nickname</span>
      <span>Вчера 18.00</span>
    </div>
  </div>
);
