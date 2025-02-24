export type Config = [
  string,
  Record<string, any>,
  React.ReactNode | React.ReactNode[]
];

export enum PATHS {
  HOME = "home",
  ROOT = "/",
  SECURE = "/secure",
}
