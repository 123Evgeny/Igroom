import axios from "axios";
import { ProfileSchema, Profile } from "./schema";

export async function fetchProfile(): Promise<Profile> {
  const res = await axios.get(
    "https://igroom.ru/api/v2/profile/5e800be0-088e-41cb-b549-10ebf4a13591"
  );
  return ProfileSchema.parse(res.data.data);
}
