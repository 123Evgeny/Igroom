"use client";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/shared/redux";
import { setTab, TabKey, getTabName } from "@/shared/redux/tabSlice";
import { usePathname } from "next/navigation";
import { BurgerMenu } from "./BurgerMenu";
import Link from "next/link";
import Image from "next/image";

const pathToTab: Record<string, TabKey> = {
  "/home": "home",
  "/message": "message",
  "/globe": "globe",
  "/bell": "bell",
  "/profile": "user",
};

export function Header() {
  const tabName = useSelector((state: RootState) => state.tab.name);
  const dispatch = useDispatch();
  const pathname = usePathname();
  const expectedTab = pathToTab[pathname] || "user";
  const expectedName = getTabName(expectedTab);

  useEffect(() => {
    dispatch(setTab(expectedTab));
  }, [expectedTab, dispatch]);

  const showName = tabName === expectedName;

  return (
    <header className="w-full bg-white  shadow-sm sticky top-0 z-10">
      <div className="flex items-center justify-between px-3 py-2 relative">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex gap-2 select-none">
            <Image
              src="/2.png"
              alt="iGroom Logo"
              width={40}
              height={40}
              className="h-10 w-10"
              priority
            />
          </Link>
          <span className="text-xl font-bold " style={{ color: "#7F7F7F" }}>
            {showName ? tabName : ""}
          </span>
        </div>
        <BurgerMenu />
      </div>
    </header>
  );
}
