import { useMutation } from "react-query";

import { User } from "../context/user/context";

const signup = (user: User) => {
  return fetch(
    "http://ec2-16-171-226-117.eu-north-1.compute.amazonaws.com:7080/v1/user/signUp",
    {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
      body: JSON.stringify({
        emailId: user.email,
        fullName: user.displayName,
      }),
    }
  );
};

export const useSignUpMutation = ({ onSuccess }: { onSuccess: () => void }) => {
  return useMutation({ mutationFn: signup, onSuccess });
};
