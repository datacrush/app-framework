import { mockApi } from "../lib/mock-api";

export const login = async (): Promise<Response | null> => {
  const response = await mockApi.authenticate();

  if (response?.ok) {
    localStorage.setItem("authenticated", "true");
  }

  return response;
};

export const logout = async () => {
  localStorage.setItem("authenticated", "false");
  const response = await mockApi.logout();

  return response;
};
