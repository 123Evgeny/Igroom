"use client";
import React from "react";
import ArrowLeftIcon from "@/shared/ui/icon/arrowLeft.svg";
import { useRouter } from "next/navigation";
import ArrowUpload from "@/shared/ui/icon/ArrowUpload.svg";
import IconEye from "@/shared/ui/icon/IconEye.svg";
import SmileCat from "@/shared/ui/icon/SmileCat.svg";
import { StatusList } from "./StatusList";
import { GameActions } from "./GameActions";
import { ProfileHistory } from "./ProfileHistory";
import { ProfilePrivacy } from "./ProfilePrivacy";
import { ProfileLists } from "./ProfileLists";
import { ProfileAbout } from "./ProfileAbout";
import { ProfileDocs } from "./ProfileDocs";
import { ProfileLogout } from "./ProfileLogout";
import { ProfileHeaderBlock } from "./ProfileHeaderBlock";
import { ProfileNameBlock } from "./ProfileNameBlock";
import { ProfileStatsBlock } from "./ProfileStatsBlock";
import { ProfileCityBlock } from "./ProfileCityBlock";

export function ProfileMainBlock() {
  const router = useRouter();
  return (
    <section className="w-full h-full max-w-xl  rounded-xl p-[10px]  gap-5 flex flex-col items-center ">
      {/* 1 */}
      <ProfileHeaderBlock />
      {/* 2 */}
      <ProfileNameBlock />
      {/* 3 */}
      <ProfileStatsBlock />
      {/* 4 */}
      <ProfileCityBlock />
      <StatusList />
      <GameActions />
      <ProfileHistory />
      <ProfilePrivacy />
      <ProfileLists />
      <ProfileAbout />
      <ProfileDocs />
      <ProfileLogout />
    </section>
  );
}
