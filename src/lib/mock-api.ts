export const mockApi = {
  authenticate: (simulateError = false): Promise<Response> =>
    new Promise((resolve) =>
      setTimeout(() => {
        const response = createResponse(null, simulateError ? 500 : 200);

        resolve(response);
      }, 500)
    ),

  me: (): Promise<Response> =>
    new Promise((resolve) =>
      setTimeout(() => {
        const authenticated = localStorage.getItem("authenticated") === "true";
        const simulateError = !authenticated;
        const data = { name: "Frank Reynolds", permissions: [1, 2, 3] };
        const response = createResponse(data, simulateError ? 401 : 200);

        resolve(response);
      }, 500)
    ),

  logout: (simulateError = false): Promise<Response> =>
    new Promise((resolve) =>
      setTimeout(() => {
        const response = createResponse(null, simulateError ? 500 : 200);

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
