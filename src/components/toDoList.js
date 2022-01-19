import React, { useEffect, useState } from "react";
import { KeyboardAwareFlatList } from "react-native-keyboard-aware-scroll-view";
import Checkbox from "expo-checkbox";
import {
  ActivityIndicator,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useGetToDos } from "../hooks/useGetToDos";
import { useUpdateToDo } from "../hooks/useUpdateToDo";
import AddToDoForm from "./addToDoForm";

const ToDoList = ({ changeList, handleClick }) => {
  const [{ todoData, isLoading }, refetch] = useGetToDos("");
  const [id, setId] = useState("");
  const [{ update }, updateToDo] = useUpdateToDo(id);

  useEffect(() => {
    refetch();
  }, [changeList, update]);

  const onHandleChange = (value, id) => {
    setId(id);
    updateToDo({
      method: "patch",
    });
  };

  const onHandleDelete = (id) => {
    setId(id);
    updateToDo({
      method: "delete",
    });
  };

  const renderItem = ({ item }) => {
    return (
      <View style={styles.container}>
        <View style={styles.checkboxContainer}>
          <Checkbox
            value={item.isCompleted}
            onValueChange={(value) => onHandleChange(value, item.id)}
            style={styles.checkbox}
          />
          <Text style={styles.label}>{item.name}</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => onHandleDelete(item.id)}
          >
            <Text style={styles.titleButton}>X</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  if (isLoading) return <ActivityIndicator />;
  if (todoData?.tasks?.length === 0) return null;

  return (
    <KeyboardAwareFlatList
      data={todoData?.tasks}
      renderItem={renderItem}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={() => <Text style={styles.h1}>Список дел</Text>}
      ListFooterComponent={() => <AddToDoForm handleClick={handleClick} />}
    />
  );
};

export default ToDoList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    maxWidth: "100%",
  },
  h1: {
    fontSize: 30,
    fontWeight: "bold",
    paddingTop: 50,
    padding: 20,
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
    width: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    margin: 8,
  },
  button: {
    maxWidth: 20,
    height: 20,
    padding: 3,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "grey",
    borderRadius: 5,
  },
  titleButton: {
    color: "white",
  },
});
