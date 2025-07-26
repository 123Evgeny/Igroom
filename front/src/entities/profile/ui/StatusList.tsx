import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/shared/redux";

export const StatusList = () => {
  const profile = useSelector((state: RootState) => state.profile.data);
  if (!profile) return null;
  return (
    <div className="w-full bg-white rounded-3xl p-4">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className="w-3.5 h-3.5 bg-green-500 rounded-full inline-block"></span>
          <span className="text-gray-700 text-xl font-bold">ЗОВЫ</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-7 h-7 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 text-lg font-bold">
            {profile.status?.zovy ?? 0}
          </span>
          <svg
            width="24"
            height="24"
            className="text-gray-400"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </div>
      </div>
      <hr className="my-2 border-gray-200" />
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-3.5 h-3.5 bg-orange-400 rounded-full inline-block"></span>
          <span className="text-gray-700 text-xl font-bold">ИДУ</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-7 h-7 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 text-lg font-bold">
            {profile.status?.idu ?? 0}
          </span>
          <svg
            width="24"
            height="24"
            className="text-gray-400"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </div>
      </div>
    </div>
  );
};
