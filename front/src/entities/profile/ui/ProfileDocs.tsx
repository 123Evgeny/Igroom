import React from "react";

const docs = [
  "Возможности ИГРУМА",
  "Правила ИГРУМА",
  "Инструкция РУМЕРА",
  "Инструкция МАСТЕРА",
  "Инструкция МЕСТА",
  "Пользовательское соглашение",
];

export const ProfileDocs = () => (
  <div className="w-full bg-white rounded-3xl p-4 mb-3">
    {docs.map((doc, idx) => (
      <div
        key={doc}
        className="flex items-center gap-2 py-2 border-b last:border-b-0 border-gray-200"
      >
        <span className="w-2 h-2 bg-gray-300 rounded-full inline-block"></span>
        <span
          className="font-normal text-[20px] leading-[25px] tracking-[-0.45px] text-black align-middle"
          style={{ verticalAlign: "middle" }}
        >
          {doc}
        </span>
      </div>
    ))}
  </div>
);
