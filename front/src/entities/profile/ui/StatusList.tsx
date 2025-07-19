import React from "react";

export const StatusList = () => (
  <div className="w-full bg-white rounded-3xl p-4">
    {/* Первая строка */}
    <div className="flex items-center justify-between mb-2">
      <div className="flex items-center gap-2">
        <span className="w-3.5 h-3.5 bg-green-500 rounded-full inline-block"></span>
        <span className="text-gray-700 text-xl font-bold">ЗОВЫ</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="w-7 h-7 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 text-lg font-bold">
          2
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
    {/* Вторая строка */}
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <span className="w-3.5 h-3.5 bg-orange-400 rounded-full inline-block"></span>
        <span className="text-gray-700 text-xl font-bold">ИДУ</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="w-7 h-7 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 text-lg font-bold">
          3
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
