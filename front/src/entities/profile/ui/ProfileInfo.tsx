import { Avatar } from "@/shared/ui/Avatar/Avatar";
import type { Profile } from "../model/types";
import { useState } from "react";

interface ProfileInfoProps {
  profile: Profile;
}

export function ProfileInfo({ profile }: ProfileInfoProps) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="flex items-center gap-4">
      <Avatar
        src={
          !imgError
            ? profile.avatar_url
            : "https://ui-avatars.com/api/?name=" +
              encodeURIComponent(profile.name)
        }
        alt={profile.name}
        size={80}
        // @ts-expect-error onError не типизирован в Avatar, но нужен для обработки ошибки загрузки
        onError={() => setImgError(true)}
      />
      <div>
        <div className="text-xl font-bold">{profile.name}</div>
        <div className="text-gray-500">@{profile.nickname}</div>
        <div className="text-sm text-gray-400">
          {profile.city.name}, {profile.age} лет
        </div>
      </div>
    </div>
  );
}
