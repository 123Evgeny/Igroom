import React, { useState, useCallback, useMemo } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/shared/redux";

export const ProfileAbout = () => {
  const profile = useSelector((state: RootState) => state.profile.data);
  const [expanded, setExpanded] = useState(false);

  const words = useMemo(
    () => profile?.about?.split(" ") ?? [],
    [profile?.about]
  );
  const isLong = words.length > 25;
  const shortText = useMemo(
    () => words.slice(0, 25).join(" ") + (isLong ? "..." : ""),
    [words, isLong]
  );
  const displayText = expanded || !isLong ? profile?.about : shortText;
  const handleToggle = useCallback(() => setExpanded((v) => !v), []);

  if (!profile) return null;

  return (
    <div className="w-full bg-white rounded-3xl p-4 mb-3">
      <div className="text-[15px] text-gray-700 leading-snug mb-2">
        {displayText}
        {isLong && (
          <span
            className="text-gray-400 ml-1 cursor-pointer select-none"
            onClick={handleToggle}
          >
            {expanded ? "▲" : "▼"}
          </span>
        )}
      </div>
      <div className="flex items-center justify-between gap-8 text-[15px] text-gray-500">
        <span>Мой телеграм</span>
        <span className="text-black font-bold">{profile.telegram}</span>
      </div>
    </div>
  );
};
