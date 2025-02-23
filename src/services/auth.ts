import { mockApi } from "../lib/mock-api";

export const login = async (): Promise<Response | null> => {
  const response = await mockApi.login();

  return response;
};

export const logout = () => {
  // Clear tokens, remove user from local storage, etc.
};
