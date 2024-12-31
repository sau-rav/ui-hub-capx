import { useCallback } from "react";
import { useQuery } from "react-query";

export const useCurrentUserRank = ({ userId }: { userId?: string }) => {
  const userRank = useCallback(async () => {
    const data = await fetch(
      `https://13.60.191.141/v1/leaderBoard/user/${userId}/rank`,
      {
        method: "GET",
      }
    );

    const response = await data.json();

    return response;
  }, [userId]);

  const { data, isLoading, error } = useQuery({
    queryKey: "currentUserRank",
    queryFn: userRank,
  });

  return { data, isLoading, error };
};
