import { useMutation } from "react-query";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

import { parseResponseStream } from "../utils/parseResponseStream";

import { User } from "../context/user/context";

const setCookie = (emailId: string) => {
  Cookies.set("userEmail", emailId, { expires: 7 }); // expires in 7 days
};

const signup = (user: User) => {
  const body = JSON.stringify({
    emailId: user.email,
    fullName: user.displayName,
    ...(user.invitationCode && { invitationCode: user.invitationCode }),
  });

  return fetch("https://13.60.191.141/v1/user/signUp", {
    method: "POST",
    headers: new Headers({
      "Content-Type": "application/json",
      "Referrer-Policy": "no-referrer",
    }),
    body,
  });
};

export const useSignUpMutation = ({
  onSuccess,
}: {
  onSuccess: (data: any) => void;
}) => {
  const router = useRouter();
  const {
    query: { invitationCode },
  } = router;

  console.log({ invitationCode });
  return useMutation({
    mutationFn: (params: any) => signup({ ...params, invitationCode }),
    onSuccess: async (data: any) => {
      const user = await parseResponseStream(data);

      setCookie(user.emailId);

      onSuccess({ ...user, invitationCode });
    },
  });
};
