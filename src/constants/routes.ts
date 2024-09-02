export const ROUTES = {
  HOME: "home",
  DETAIL: "detail",
  VOICE_CHAT: "voice chat",
} as const;

export type RouteName = (typeof ROUTES)[keyof typeof ROUTES];
