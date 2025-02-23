import { User } from "../context/user";
import { mockApi } from "../lib/mock-api";

export const login = async (): Promise<User> => {
  const { user } = await mockApi.me();

  return user;
};

export const logout = () => {
  // Clear tokens, remove user from local storage, etc.
};
