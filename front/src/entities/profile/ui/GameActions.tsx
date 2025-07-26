import React from "react";

export const GameActions = () => (
  <div className="w-full max-w-xl mx-auto rounded-3xl border-4 border-[#A000FF] bg-transparent mt-4 overflow-hidden p-0">
    <button
      type="button"
      className="w-full bg-[#9500FF] text-white text-2xl font-bold py-6 focus:outline-none border-none rounded-none transition active:scale-95 hover:bg-[#b300ff] cursor-pointer select-none"
      style={{ borderRadius: 0 }}
      tabIndex={0}
    >
      СОЗДАТЬ ИГРУМ
    </button>
    <div className="w-full h-[2px] bg-[#A000FF]" />
    <button
      type="button"
      className="w-full bg-white text-[#A000FF] text-2xl font-bold py-6 focus:outline-none border-none rounded-none transition active:scale-95 hover:bg-[#f3e6ff] cursor-pointer select-none"
      style={{ borderRadius: 0 }}
      tabIndex={0}
    >
      МОИ ИГРУМЫ
    </button>
  </div>
);
