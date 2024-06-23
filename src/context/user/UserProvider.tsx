import { useMemo, useState, ReactNode } from "react";
import { UserContext, User } from "./context";

export const UserProvider = ({
  children,
}: {
  children: ReactNode;
}): JSX.Element => {
  const [user, setUser] = useState<User | undefined>(undefined);

  const value = useMemo(
    () => ({
      user,
      setUser,
    }),
    [user]
  );

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
