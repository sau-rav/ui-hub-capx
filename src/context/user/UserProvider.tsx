import { useMemo, useState, ReactNode, useEffect } from "react";
import { UserContext, User } from "./context";
import { auth } from "../..//config/firebase";

export const UserProvider = ({
  children,
}: {
  children: ReactNode;
}): JSX.Element => {
  const [user, setUser] = useState<any>(undefined);

  auth.onAuthStateChanged((user) => {
    setUser(user);
  });

  const value = useMemo(
    () => ({
      user,
      setUser,
    }),
    [user]
  );

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
