"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchProfile } from "../../entities/profile/model/api";
import { ProfilePageWidget } from "../../widgets/profile-page/ui/ProfilePageWidget";

export default function ProfilePage() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["profile"],
    queryFn: fetchProfile,
  });

  if (isLoading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка загрузки профиля</div>;
  if (!data) return <div>Нет данных</div>;

  return <ProfilePageWidget profile={data} />;
}
