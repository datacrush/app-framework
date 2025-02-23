import { User } from "../context/user";

export const mockApi = {
  me: (): Promise<{ user: User }> =>
    new Promise((resolve) =>
      setTimeout(
        () => resolve({ user: { name: "Night Man", permissions: [1, 2, 3] } }),
        500
      )
    ),
};

// export const mockApi = {
//   me: (simulateError = false): Promise<Response> =>
//     new Promise((resolve) =>
//       setTimeout(() => {
//         const data = { user: { name: "Night Man", permissions: [1, 2, 3] } };

//         if (simulateError) {
//           resolve({
//             ok: false,
//             status: 404,
//             json: async () => ({ error: "User not found" }),
//           } as Response);
//         } else {
//           resolve({
//             ok: true,
//             status: 200,
//             json: async () => data,
//           } as Response);
//         }
//       }, 500)
//     ),
// };
