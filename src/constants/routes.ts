export const ROUTES = {
  HOME: "home",
  DETAIL: "detail",
} as const;

export type RouteName = (typeof ROUTES)[keyof typeof ROUTES];
