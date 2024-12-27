import { useQuery } from "react-query";

const leaderboard = async () => {
  const data = await fetch("https://13.60.191.141/v1/leaderBoard?limit=3", {
    method: "GET",
  });

  const response = await data.json();

  return response;
};

export const useLeaderboard = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: "LeaderBoard",
    queryFn: leaderboard,
  });

  return { data, isLoading, error };
};
