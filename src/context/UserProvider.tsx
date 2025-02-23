import { ReactNode } from "react";
import { UserContext, createUserProvider } from "./user";

type UserProviderProps = { children: ReactNode };

export const UserProvider = ({ children }: UserProviderProps) => {
  const { state, dispatch } = createUserProvider();

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};
