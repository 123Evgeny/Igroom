import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setProfile } from "@/shared/redux/profileSlice";
import { fetchProfile } from "@/entities/profile/model/api";
import { ProfileCard } from "../../../features/profile-card/ui/ProfileCard";

export function ProfilePageWidget() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchProfile().then((profile) => {
      dispatch(setProfile(profile));
    });
  }, [dispatch]);

  return (
    <div className="max-w-xl mx-auto  mt-4">
      <ProfileCard />
    </div>
  );
}
