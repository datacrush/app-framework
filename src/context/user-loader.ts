import { redirect } from "react-router";

import { mockApi } from "../lib/mock-api";

export const userLoader = async ({ request }: { request: Request }) => {
  try {
    const response = await mockApi.me();

    if (!response.ok) {
      const url = new URL(request.url);
      return redirect(`/?resume=${encodeURIComponent(url.pathname)}`);
    }

    return await response.json();
  } catch {
    return redirect("/"); // Redirect on network errors
  }
};
