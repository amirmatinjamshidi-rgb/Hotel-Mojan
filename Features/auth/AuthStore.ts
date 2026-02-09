import { create } from "zustand";

export type User = {
  id: string;
  name: string;
  phone: string;
  password: string;
  otp: string;
  avatar: string;
};

type AuthState = {
  isAuthenticated: boolean;
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  user: null,

  login: (user) =>
    set({
      isAuthenticated: true,
      user,
    }),

  logout: () =>
    set({
      isAuthenticated: false,
      user: null,
    }),
}));
