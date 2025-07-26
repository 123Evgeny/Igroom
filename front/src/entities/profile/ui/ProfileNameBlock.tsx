import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/shared/redux";

function formatLastLogin(dateStr?: string) {
  if (!dateStr) return "-";
  const date = new Date(dateStr);
  return (
    date.toLocaleDateString("ru-RU") +
    " " +
    date.toLocaleTimeString("ru-RU", { hour: "2-digit", minute: "2-digit" })
  );
}

export const ProfileNameBlock = () => {
  const profile = useSelector((state: RootState) => state.profile.data);
  if (!profile) return null;
  const isLongName = profile.name.length > 18;
  const roleText = profile.role ? profile.role + ":" : "румер:";
  return (
    <div className="text-center mb-1 ">
      {isLongName ? (
        <>
          <div className="text-center align-middle text-[22px] leading-[28px] tracking-[-0.26px] text-gray-500 font-normal font-[SF Pro] mb-1">
            {roleText}
          </div>
          <div className="text-[28px] leading-[34px] tracking-[0.38px] text-center align-middle font-[SF Pro] font-bold">
            {profile.name}
          </div>
        </>
      ) : (
        <div className="flex items-center mb-3 gap-2">
          <span className="text-center align-middle text-[22px] leading-[28px] tracking-[-0.26px] text-gray-500 font-normal font-[SF Pro]">
            {roleText}
          </span>
          <span className="text-[28px] leading-[34px] tracking-[0.38px] text-center align-middle font-[SF Pro] font-bold">
            {profile.name}
          </span>
        </div>
      )}
      <div
        className="text-sm flex justify-center ml-[-10px] gap-35"
        style={{ color: "#434343" }}
      >
        <span>@{profile.nickname}</span>
        <span>{formatLastLogin(profile.last_login_at)}</span>
      </div>
    </div>
  );
};
