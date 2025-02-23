export const mockApi = {
  me: (simulateError = false): Promise<Response> =>
    new Promise((resolve) =>
      setTimeout(() => {
        const data = { name: "Night Man", permissions: [1, 2, 3] };

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
