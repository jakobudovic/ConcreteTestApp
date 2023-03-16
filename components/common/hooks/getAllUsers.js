import { useQuery } from "@tanstack/react-query";

const usersUrl = "https://randomuser.me/api";

const getUsers = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000)); // Mock delay in API call
  const response = await fetch(usersUrl + "?results=10");
  return response.json();
};

export const UseGetUsers = () => {
  const { data, isLoading } = useQuery(["randomFacts"], getUsers);
  return { data, isLoading };
};
