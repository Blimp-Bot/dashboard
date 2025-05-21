import { Guild } from "discord.js";
import { create } from "zustand";
import { Session, User as AuthUser } from "./auth/client";

export type User = AuthUser & {
  discordId?: string | null;
  guilds: string;
};

export const useGuildStore = create<{
  guild: Guild | null;
  setGuild: (guild: Guild | null) => void;
}>()((set) => ({
  guild: null,
  setGuild: (guild: Guild | null) => set(() => ({ guild })),
}));

export const useAvailableGuildStore = create<{
  guilds: Guild[] | null;
  setGuilds: (guilds: Guild[] | null) => void;
}>()((set) => ({
  guilds: [],
  setGuilds: (guilds: Guild[] | null) => set(() => ({ guilds })),
}));

export const useUserStore = create<{
  user: User | null;
  session: Session | null;
  setUser: (user: User | null) => void;
  setSession: (session: Session | null) => void;
}>()((set) => ({
  user: null,
  session: null,
  setUser: (user: User | null) => set(() => ({ user })),
  setSession: (session: Session | null) => set(() => ({ session })),
}));
