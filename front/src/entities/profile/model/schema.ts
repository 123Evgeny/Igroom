import { z } from "zod";

export const ProfileSchema = z.object({
  id: z.string(),
  name: z.string(),
  nickname: z.string(),
  avatar_url: z.string(),
  is_kotum: z.boolean(),
  is_me: z.boolean(),
  role: z.string(),
  last_login_at: z.string(),
  stats: z.object({
    monthsInIgroom: z.number(),
    meetingsCount: z.number(),
    totalRoomers: z.number(),
  }),
  city: z.object({
    id: z.string(),
    name: z.string(),
  }),
  status: z.object({
    zovy: z.number(),
    idu: z.number(),
  }),
  is_adult: z.boolean(),
  is_private: z.boolean(),
  about: z.string(),
  telegram: z.string(),
});

export type Profile = z.infer<typeof ProfileSchema>;
