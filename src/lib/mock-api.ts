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
              props: { to: `${PATHS.SECURE}/${PATHS.HOME}/dynamic` },
              children: ["Go to dynamic"],
            },
            {
              name: "routes",
              children: [
                {
                  name: "route",
                  props: {
                    path: "dynamic",
                    element: {
                      name: "div",
                      children: [
                        {
                          name: "p",
                          children: ["It works!"],
                        },
                        {
                          name: "p",
                          children: [
                            {
                              name: "link",
                              props: { to: `${PATHS.SECURE}/${PATHS.HOME}` },
                              children: ["Go home"],
                            },
                          ],
                        },
                      ],
                    },
                  },
                },
              ],
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
