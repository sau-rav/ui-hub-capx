import { useMutation } from "react-query";

import { User } from "../context/user/context";

const signup = (user: User) => {
  const body = JSON.stringify({
    emailId: user.email,
    fullName: user.displayName,
  });

  return fetch("https://16.171.226.117/v1/user/signUp", {
    method: "POST",
    headers: new Headers({
      "Content-Type": "application/json",
      "Referrer-Policy": "no-referrer",
    }),
    body,
  });
};

export const useSignUpMutation = () => {
  return useMutation({ mutationFn: signup });
};
