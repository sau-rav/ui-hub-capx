import { useMemo } from "react";
import { useQuery } from "react-query";

const usersCount = async () => {
  const data = await fetch("http://13.60.191.141/v1/user/total", {
    method: "GET",
  });

  const response = await data.json();

  console.log(response, "Users Count Response");

  return response;
};

export const useUsersCount = () => {
  const { data, isLoading, error } = useQuery({ queryFn: usersCount });

  const users = useMemo(() => {
    if (!data) {
      return undefined;
    }
    const { response } = data;
    return Math.max(Math.floor(response / 100) * 100, 100);
  }, [data]);

  return { users, isLoading, error };
};
