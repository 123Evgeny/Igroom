import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/shared/redux";

export const ProfileStatsBlock = () => {
  const profile = useSelector((state: RootState) => state.profile.data);
  if (!profile) return null;
  return (
    <div className="flex justify-between w-full mt-3 mb-2 text-center">
      <div className="flex-1 flex flex-col gap-1">
        <div className="text-[24px] leading-[22px] tracking-[-0.43px] font-bold text-center align-middle">
          {profile.monthsInIgroom ?? 0} месяц
        </div>
        <div className="text-[18px] leading-[22px] tracking-[-0.45px] text-[#434343] text-center align-middle font-normal ">
          в игруме
        </div>
      </div>
      <div className="flex items-center">
        <div className="h-10 w-px bg-[#BDBDBD] mx-4" />
      </div>
      <div className="flex-1 flex flex-col gap-1">
        <div className="text-[24px] leading-[22px] tracking-[-0.43px] font-bold text-center align-middle">
          {profile.meetingsCount ?? 0}
        </div>
        <div className="text-[18px] leading-[22px] tracking-[-0.45px] text-[#434343] text-center align-middle font-normal ">
          встреч
        </div>
      </div>
      <div className="flex items-center">
        <div className="h-10 w-px bg-[#BDBDBD] mx-4" />
      </div>
      <div className="flex-1 flex flex-col gap-1">
        <div className="text-[24px] leading-[22px] tracking-[-0.43px] font-bold text-center align-middle">
          {profile.totalRoomers ?? 0}
        </div>
        <div className="text-[18px] leading-[22px] tracking-[-0.45px] text-[#434343] text-center align-middle font-normal ">
          румеров
        </div>
      </div>
    </div>
  );
};
