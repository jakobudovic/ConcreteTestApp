import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const usersUrl = "https://randomuser.me/api";
const getUsers = async () => {
  const response = await fetch(usersUrl + "?results=10");
  return response.json();
};

export const UseGetUsers = () => {
  const { data, isLoading } = useQuery(["randomFacts"], getUsers);
  return { data, isLoading };
};
