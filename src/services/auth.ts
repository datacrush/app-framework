import { User } from "../context/user";
import { mockApi } from "../lib/mock-api";

export const login = async (): Promise<User> => {
  const response = await mockApi.me();

  return response.ok ? await response.json() : null;
};

export const logout = () => {
  // Clear tokens, remove user from local storage, etc.
};
