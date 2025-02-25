import { mockApi } from "./mock-api";

if (import.meta.env.MODE == "development") {
  console.log("Mock API enabled");

  const originalFetch: typeof fetch = window.fetch;

  window.fetch = async (
    input: RequestInfo | URL,
    init?: RequestInit
  ): Promise<Response> => {
    let url: string;

    if (typeof input === "string") {
      url = input; // If input is a string, it's already a URL
    } else if (input instanceof URL) {
      url = input.toString(); // Convert URL object to string
    } else if (input instanceof Request) {
      url = input.url; // Extract URL from Request object
    } else {
      return originalFetch(input, init); // Fallback to original fetch if type is unexpected
    }

    // Mock API responses for development
    if (url.startsWith("/api/")) {
      console.log(`Intercepted fetch to: ${url}`);

      return mockApi[url]();
    }

    // Use real fetch for everything else
    return originalFetch(input, init);
  };
}
