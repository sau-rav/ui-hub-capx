import { useQuery } from "react-query";

const topUsersQueryFnGetter = () => async () => {
  const response = await fetch(`https://13.60.191.141/v1/leaderBoard?limit=3`, {
    method: "GET",
    headers: new Headers({
      "Content-Type": "application/json",
      "Referrer-Policy": "no-referrer",
    }),
  });

  const data = await response.json();

  return data;
};

export const useTopUsers = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["leaderBoard"],
    queryFn: topUsersQueryFnGetter(),
  });

  return { data, isLoading, error };
};
