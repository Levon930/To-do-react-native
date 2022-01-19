import React from "react";
import { StyleSheet, View } from "react-native";

import ToDoList from "./src/components/ToDoList";
import { useAddToDo } from "./src/hooks/useAddToDo";

export default function App() {
  const [{ loading }, addToDo] = useAddToDo();

  const handleClick = (toDoTitle) => {
    addToDo({
      method: "post",
      data: {
        name: toDoTitle,
      },
    });
  };

  return (
    <View style={styles.container}>
      <ToDoList changeList={loading} handleClick={handleClick} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    maxWidth: "100%",
  },
});
