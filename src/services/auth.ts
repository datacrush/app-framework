export const login = async (): Promise<Response | null> => {
  const response = await fetch("/api/authenticate");

  if (response?.ok) {
    localStorage.setItem("authenticated", "true");
  }

  return response;
};

export const logout = async () => {
  localStorage.setItem("authenticated", "false");
  const response = await fetch("/api/logout");

  return response;
};
