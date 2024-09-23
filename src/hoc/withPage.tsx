import { useEffect } from "react";
import { NextPage } from "next";
import cookie from "cookie";

import { useUser } from "../context/user";

import { parseResponseStream } from "../utils/parseResponseStream";

export const withPage = <P, IP>(PageComponent: NextPage<P, IP>): any => {
  const WithUser = ({ ...restProps }: any): JSX.Element | null => {
    const userContextValue = useUser();
    const { setUser, user } = userContextValue ?? {};

    useEffect(() => {
      const fetchUser = async () => {
        const cookies = cookie.parse(document.cookie || "");
        const _emailId = cookies.userEmail;

        if (!_emailId) {
          return;
        }

        const body = JSON.stringify({
          emailId: _emailId,
        });

        const response = await fetch("https://13.60.191.141/v1/user/signIn", {
          method: "POST",
          headers: new Headers({
            "Content-Type": "application/json",
            "Referrer-Policy": "no-referrer",
          }),
          body,
        });

        const { userId, emailId, fullName, invitationCode } =
          await parseResponseStream(response);

        setUser?.({
          ...user,
          uid: user?.uid ?? userId,
          email: emailId,
          displayName: user?.displayName ?? fullName,
          invitationCode,
          userId,
        });
      };

      fetchUser();
    }, []);

    return user ? <PageComponent {...restProps} /> : null;
  };

  return WithUser;
};
