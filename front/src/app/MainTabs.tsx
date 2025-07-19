"use client";

import { useState } from "react";
import { Footer } from "../widgets/footer/Footer";
import { ProfilePageWidget } from "../widgets/profile-page/ui/ProfilePageWidget";
import { fetchProfile } from "../entities/profile/model/api";
import { useQuery } from "@tanstack/react-query";

const PROFILE_TAB = "user";

export default function MainTabs() {
  const [activeTab, setActiveTab] = useState(PROFILE_TAB);

  // Получаем профиль только если выбрана вкладка user
  const { data, isLoading, error } = useQuery({
    queryKey: ["profile"],
    queryFn: fetchProfile,
    enabled: activeTab === PROFILE_TAB,
  });

  let content;
  if (activeTab === PROFILE_TAB) {
    if (isLoading) content = <div>Загрузка...</div>;
    else if (error) content = <div>Ошибка загрузки профиля</div>;
    else if (data) content = <ProfilePageWidget profile={data} />;
    else content = null;
  }

  return (
    <div className="pb-24 min-h-screen flex flex-col">
      <div className="flex-1">{content}</div>
      <Footer />
    </div>
  );
}
