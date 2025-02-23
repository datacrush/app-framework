import { redirect } from "react-router";
import { mockApi } from "../lib/mock-api";

export const userLoader = async () => {
  try {
    const response = await mockApi.me();

    if (!response.ok) {
      return redirect("/"); // Force redirect if /me fails
    }

    return await response.json();
  } catch {
    return redirect("/"); // Redirect on network errors
  }
};
