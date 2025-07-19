import { ProfileCard } from "../../../features/profile-card/ui/ProfileCard";
import type { Profile } from "../../../entities/profile/model/types";
import { ProfileSocials } from "../../../entities/profile/ui/ProfileSocials";

interface ProfilePageWidgetProps {
  profile: Profile;
}

export function ProfilePageWidget({ profile }: ProfilePageWidgetProps) {
  return (
    <div className="max-w-xl mx-auto  mt-4">
      <ProfileCard profile={profile} />
      {/* Здесь могут быть другие виджеты */}
    </div>
  );
}
