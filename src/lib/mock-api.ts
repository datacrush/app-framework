import { PATHS } from "../types";

export const mockApi: Record<string, (...args: any[]) => Promise<Response>> = {
  "/api/authenticate": (simulateError = false): Promise<Response> =>
    new Promise((resolve) =>
      setTimeout(() => {
        const response = createResponse(null, simulateError ? 500 : 200);

        resolve(response);
      }, 500)
    ),

  "/api/me": (): Promise<Response> =>
    new Promise((resolve) =>
      setTimeout(() => {
        const authenticated = localStorage.getItem("authenticated") === "true";
        const simulateError = !authenticated;
        const data = { name: "Frank Reynolds", permissions: [1, 2, 3] };
        const response = createResponse(data, simulateError ? 401 : 200);

        resolve(response);
      }, 500)
    ),

  "/api/logout": (simulateError = false): Promise<Response> =>
    new Promise((resolve) =>
      setTimeout(() => {
        const response = createResponse(null, simulateError ? 500 : 200);

        resolve(response);
      }, 500)
    ),

  "/api/ui/example": (simulateError = false): Promise<Response> =>
    new Promise((resolve) =>
      setTimeout(() => {
        const data = {
          name: "div",
          children: [
            {
              name: "p",
              props: { className: "cheesy-blink-gradient" },
              children: ["Hello world!"],
            },
            {
              name: "link",
              props: { to: PATHS.ROOT },
              children: ["Go to login"],
            },
          ],
        };
        const response = createResponse(data, simulateError ? 500 : 200);

        resolve(response);
      }, 500)
    ),
};

const createResponse = (data: any, status = 200) => {
  return {
    ok: status < 400,
    status,
    json: async () => data,
  } as Response;
};
