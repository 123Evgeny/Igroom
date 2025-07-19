import React from "react";

const GameCreateButton = (
  props: React.ButtonHTMLAttributes<HTMLButtonElement>
) => (
  <button
    {...props}
    className="w-full bg-[#A000FF] text-white text-2xl font-bold py-6 focus:outline-none rounded-t-[28px] rounded-b-none"
    style={{
      borderTopLeftRadius: 32,
      borderTopRightRadius: 32,
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
      ...(props.style || {}),
    }}
  >
    СОЗДАТЬ ИГРУМ
  </button>
);

const GameMyButton = (props: React.ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button
    {...props}
    className="w-full bg-white text-[#A000FF] text-2xl font-bold py-6 focus:outline-none border-t border-[#A000FF] rounded-b-[28px] rounded-t-none"
    style={{
      borderBottomLeftRadius: 32,
      borderBottomRightRadius: 32,
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0,
      ...(props.style || {}),
    }}
  >
    МОИ ИГРУМЫ
  </button>
);

export const GameActions = () => (
  <div className="w-full max-w-md mx-auto rounded-[32px] border-4 border-[#A000FF] bg-transparent mt-4 overflow-hidden p-0">
    <button
      className="w-full bg-[#A000FF] text-white text-2xl font-bold py-6 focus:outline-none border-none rounded-none"
      style={{ borderRadius: 0 }}
    >
      СОЗДАТЬ ИГРУМ
    </button>
    <div className="w-full h-[2px] bg-[#A000FF]" />
    <button
      className="w-full bg-white text-[#A000FF] text-2xl font-bold py-6 focus:outline-none border-none rounded-none"
      style={{ borderRadius: 0 }}
    >
      МОИ ИГРУМЫ
    </button>
  </div>
);

