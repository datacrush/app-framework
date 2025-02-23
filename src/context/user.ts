import { createContext, useContext, useReducer } from "react";

export type User = { name: string; permissions: number[] } | null;

type UserState = { user: User };

type UserAction = { type: "LOGIN"; payload: User } | { type: "LOGOUT" };

export const UserContext = createContext<{
  state: UserState;
  dispatch: React.Dispatch<UserAction>;
} | null>(null);

const userReducer = (state: UserState, action: UserAction): UserState => {
  switch (action.type) {
    case "LOGIN":
      return { user: action.payload };
    case "LOGOUT":
      return { user: null };
    default:
      return state;
  }
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context)
    throw new Error("useUser must be used within a UserContext.Provider");
  return context;
};

export const createUserProvider = () => {
  const [state, dispatch] = useReducer(userReducer, { user: null });
  return { state, dispatch };
};

// export const createUserProvider = () => {
//   const [state, dispatch] = useReducer(userReducer, { user: null });
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchUser = async () => {
//       try {
//         const response = await fetch("/me", { credentials: "include" });
//         if (response.ok) {
//           const user = await response.json();
//           dispatch({ type: "LOGIN", payload: user });
//         } else {
//           dispatch({ type: "LOGOUT" });
//         }
//       } catch {
//         dispatch({ type: "LOGOUT" });
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchUser();
//   }, []);

//   return { state, dispatch, loading };
// };
