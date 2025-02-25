export type Config = {
  name: string;
  props?: Record<string, any>;
  children?: [Config | string];
};

export enum PATHS {
  HOME = "home",
  ROOT = "/",
  SECURE = "/secure",
}
