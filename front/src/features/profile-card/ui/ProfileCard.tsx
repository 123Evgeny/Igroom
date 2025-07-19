import { ProfileMainBlock } from "../../../entities/profile/ui/ProfileMainBlock";
import type { Profile } from "../../../entities/profile/model/types";

interface ProfileCardProps {
  profile: Profile;
}

export function ProfileCard({ profile }: ProfileCardProps) {
  return (
    <section className=" flex justify-center mb-15  p-3">
      <ProfileMainBlock />
      {/* Здесь будут дополнительные блоки профиля */}
    </section>
  );
}
