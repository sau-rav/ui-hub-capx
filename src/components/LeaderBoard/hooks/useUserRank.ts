import { useCallback, useRef, useEffect, useState } from "react";

import { useQuery } from "react-query";
import { useUser } from "../../../context/user";

const leaderBoardQueryFnGetter = (userId: string | undefined) => async () => {
  const response = await fetch(
    `https://13.60.191.141/v1/leaderBoard/user/${userId}/rank`,
    {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        "Referrer-Policy": "no-referrer",
      }),
    }
  );

  const data = await response.json();

  return data;
};

export const useUserRank = () => {
  const userContext = useUser();
  const { user } = userContext ?? {};

  const userIdRef = useRef<string | undefined>(undefined);

  useEffect(() => {
    if (!userIdRef.current && user?.userId) {
      userIdRef.current = user?.userId;
    }
  }, [user?.userId]);

  const leaderBoardQueryFn = useCallback(
    () => leaderBoardQueryFnGetter(userIdRef.current)(),
    [user?.userId]
  );

  const { data, isLoading, error } = useQuery({
    queryKey: ["leaderBoard", "userId"],
    queryFn: leaderBoardQueryFn,
  });

  return { data, isLoading, error };
};
