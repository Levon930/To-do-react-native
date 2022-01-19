import React, { useState } from "react";
import { Button, StyleSheet, View, TextInput } from "react-native";

const AddToDoForm = ({ handleClick }) => {
  const [toDoTitle, setToDoTitle] = useState("");

  const handleChange = (value) => {
    setToDoTitle(value);
  };

  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        value={toDoTitle}
        onChangeText={handleChange}
      />
      <Button title="Добавить задачу" onPress={() => handleClick(toDoTitle)} />
    </View>
  );
};

export default AddToDoForm;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
  },
  h1: {
    fontSize: 30,
    fontWeight: "bold",
    paddingTop: 50,
    padding: 20,
  },
  form: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    width: "100%",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: "90%",
  },
});
