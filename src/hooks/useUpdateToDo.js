import useFetch from "./useFetch";
export const useUpdateToDo = (id) => {
  const [{ isLoading }, doFetch] = useFetch(`/${id}`);
  const updateToDo = doFetch;
  return [{ update: isLoading }, updateToDo];
};
