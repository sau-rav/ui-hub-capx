import { createContext, useContext } from "react";

export type User = {
  displayName: string | null;
  email: string | null;
  uid: string;
  accessToken: string;
};

type Value =
  | {
      user?: User | null;
      setUser: (user: User | null) => void;
    }
  | undefined;

export const UserContext = createContext<Value>(undefined);

export const useUser = (): Value => useContext(UserContext);
