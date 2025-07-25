import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/shared/redux";

export const ProfileCityBlock = () => {
  const profile = useSelector((state: RootState) => state.profile.data);
  if (!profile) return null;
  return (
    <div className="flex items-center gap-2 w-full mt-2">
      <div className="flex-1 flex items-center justify-center h-[60px] bg-white rounded-[25px] px-4 text-[22px] leading-[28px] tracking-[-0.26px] text-center align-middle ">
        {profile.city.name}
      </div>

      <button
        className="flex items-center gap-1 rounded-[25px] h-[60px] px-4 py-2 text-[#A7A7A7]"
        style={{ border: "3px solid #A7A7A7" }}
      >
        <span className="text-xl">⚙️</span>
        <span className="text-sm">РЕДАКТ</span>
      </button>
    </div>
  );
};
