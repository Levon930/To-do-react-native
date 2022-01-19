import { useState, useEffect, useCallback } from "react";
import { Alert } from "react-native";
import axios from "axios";

const handleError = () =>
  Alert.alert("Ошибка", "Что то пошло не так!", [
    { text: "OK", onPress: () => {} },
  ]);

const useFetch = (url) => {
  const urlApi = "https://stage.moezdorovie.org/api/v3/todo";
  const [response, setResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [options, setOptions] = useState({});

  const doFetch = useCallback((options) => {
    setOptions(options);
    setIsLoading(true);
  }, []);
  console.log(urlApi + url);
  useEffect(() => {
    const requestOptions = {
      ...options,
    };
    if (!isLoading) {
      return;
    }
    axios(urlApi + url, requestOptions)
      .then((res) => {
        setResponse(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        handleError();
      });
  }, [isLoading, options, url]);

  return [{ response, isLoading, url }, doFetch];
};
export default useFetch;
