import React from "react";

export const ProfileAbout = () => (
  <div className="w-full bg-white rounded-3xl p-4 mb-3">
    <div className="text-[15px] text-gray-700 leading-snug mb-2">
      Я профессиональный скуф, обожаю сидеть дома и часто играю в Мафию с
      друзьями по вечерам в Сицилии и зову всех желающих и разные другие дела...
      <span className="text-gray-400 ml-1 cursor-pointer">&gt;</span>
    </div>
    <div className="flex items-center gap-2 text-[15px] text-gray-500">
      <span>Мой телеграм</span>
      <span className="text-black font-bold">@ribakit3</span>
    </div>
  </div>
);
