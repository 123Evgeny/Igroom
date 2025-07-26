import axios from "axios";
import { Profile } from "./types";

const MOCK_PROFILE = {
  is_kotum: false,
  is_me: false,
  monthsInIgroom: 1,
  meetingsCount: 15,
  totalRoomers: 350,
  stats: {
    monthsInIgroom: 1,
    meetingsCount: 15,
    totalRoomers: 350,
  },
  status: {
    zovy: 5,
    idu: 7,
  },
  is_adult: false,
  about: `Я профессиональный скуф, обожаю сидеть дома и часто играю в Мафию с друзьями по вечерам в Сицилии и зову всех желающих и разные другие дела...
Люблю тишину, уют и хорошие диалоги с умными людьми.
Часто залипаю в атмосферные треки и пью чай с бергамотом.
Иногда неожиданно пропадаю, чтобы подумать о вечном или просто выспаться.
С интересом знакомлюсь с новыми людьми, особенно если у них есть чувство юмора.
Если у тебя есть плед, лампа и странные истории — мы точно сойдёмся.`,
};

export async function fetchProfile(): Promise<Profile> {
  const res = await axios.get(
    "https://igroom.ru/api/v2/profile/5e800be0-088e-41cb-b549-10ebf4a13591"
  );
  const data = res.data.data;
  return {
    ...MOCK_PROFILE,
    ...data,
    monthsInIgroom: data.monthsInIgroom ?? MOCK_PROFILE.monthsInIgroom,
    meetingsCount: data.meetingsCount ?? MOCK_PROFILE.meetingsCount,
    totalRoomers: data.totalRoomers ?? MOCK_PROFILE.totalRoomers,
    status: data.status ?? MOCK_PROFILE.status,
    about: data.about ?? MOCK_PROFILE.about,
  };
}
