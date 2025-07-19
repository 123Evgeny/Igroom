"use client";
import React, { useRef, useState, useEffect } from "react";
import { FiMenu, FiUser, FiLogOut } from "react-icons/fi";

export function BurgerMenu() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    function handleClick(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  return (
    <div className="relative">
      <button
        className="p-2 rounded hover:bg-gray-100 transition"
        aria-label="Открыть меню"
        onClick={() => setOpen((v) => !v)}
      >
        <FiMenu size={28} className="text-gray-500" />
      </button>
      {open && (
        <div
          ref={menuRef}
          className="absolute right-0 mt-2 w-40 bg-white border rounded shadow-lg py-2 z-20 animate-fade-in"
        >
          <a
            href="/profile"
            className="flex items-center gap-2 px-4 py-2 hover:bg-blue-50 transition text-gray-800"
            onClick={() => setOpen(false)}
          >
            <FiUser size={20} className="text-blue-700" />
            <span>Профиль</span>
          </a>
          <button
            className="flex items-center gap-2 px-4 py-2 w-full text-left hover:bg-red-50 transition text-red-600"
            onClick={() => setOpen(false)}
          >
            <FiLogOut size={20} className="text-red-600" />
            <span>Выйти</span>
          </button>
        </div>
      )}
    </div>
  );
}
