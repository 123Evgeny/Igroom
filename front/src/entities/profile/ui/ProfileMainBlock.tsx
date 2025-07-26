"use client";
import React from "react";
import { StatusList } from "./StatusList";
import { GameActions } from "./GameActions";
import { ProfileHistory } from "./ProfileHistory";
import { ProfilePrivacy } from "./ProfilePrivacy";
import { ProfileLists } from "./ProfileLists";
import { ProfileAbout } from "./ProfileAbout";
import { ProfileLogout } from "./ProfileLogout";
import { ProfileHeaderBlock } from "./ProfileHeaderBlock";
import { ProfileNameBlock } from "./ProfileNameBlock";
import { ProfileStatsBlock } from "./ProfileStatsBlock";
import { ProfileCityBlock } from "./ProfileCityBlock";
import dynamic from "next/dynamic";

const ProfileDocs = dynamic(() => import("./ProfileDocs"), {
  loading: () => (
    <div className="text-center text-gray-400">Загрузка документов...</div>
  ),
});

export function ProfileMainBlock() {
  return (
    <section className="w-full h-full max-w-xl  rounded-xl p-[10px]  gap-5 flex flex-col items-center ">
      <ProfileHeaderBlock />
      <ProfileNameBlock />
      <ProfileStatsBlock />
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
