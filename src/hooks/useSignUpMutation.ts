import { useMutation } from "react-query";

import { User } from "../context/user/context";

const signup = (user: User) => {
  const body = JSON.stringify({
    emailId: user.email,
    fullName: user.displayName,
  });

  return fetch(
    "https://ec2-16-171-226-117.eu-north-1.compute.amazonaws.com/v1/user/signUp",
    {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
        "Referrer-Policy": "no-referrer",
      }),
      body,
    }
  );
};

export const useSignUpMutation = ({ onSuccess }: { onSuccess: () => void }) => {
  return useMutation({ mutationFn: signup, onSuccess });
};
