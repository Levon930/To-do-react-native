import { useEffect } from "react";
import useFetch from "./useFetch";

export const useGetToDos = () => {
  const [{ response, isLoading }, doFetch] = useFetch("");
  useEffect(() => {
    doFetch();
  }, []);
  const reFetchToDo = doFetch;
  return [{ todoData: response, isLoading }, reFetchToDo];
};
