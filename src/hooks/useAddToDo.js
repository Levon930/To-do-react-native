import useFetch from "./useFetch";
export const useAddToDo = () => {
  const [{ isLoading }, doFetch] = useFetch("");
  const addToDo = doFetch;
  return [{ loading: isLoading }, addToDo];
};
