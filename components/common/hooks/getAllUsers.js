import { useQuery } from "@tanstack/react-query";

const usersUrl = "https://randomuser.me/api";

const getUsers = async () => {
  await new Promise((resolve) => setTimeout(resolve, 500)); // Mock delay in API call
  const response = await fetch(usersUrl + "?results=10");
  return response.json();
};

export const useGetUsers = () => {
  const { data, isLoading, refetch } = useQuery(["users"], getUsers);
  return { data, isLoading, refetch };
};
