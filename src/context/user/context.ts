import { createContext, useContext } from "react";

export type User = {
  displayName: string | null;
  email: string | null;
  uid: string;
};

type Value =
  | { user?: User | undefined; setUser: (user: User | undefined) => void }
  | undefined;

export const UserContext = createContext<Value>(undefined);

export const useUser = (): Value => useContext(UserContext);
