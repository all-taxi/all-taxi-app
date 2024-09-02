export const ROUTES = {
  HOME: "home",
  DESTINATIONLIST: "destination list",
  DESTINATION: "destination",
  VOICE_CHAT: "voice chat",
} as const;

export type RouteName = (typeof ROUTES)[keyof typeof ROUTES];
