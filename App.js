import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  SafeAreaView,
  Button,
  ScrollView,
} from "react-native";

export default function App() {
  const [todolist, setTodolist] = useState("");
  const [addTodo, setAddTodo] = useState([]);

  const handleTodoList = (inputtext) => {
    setTodolist(inputtext);
  };
  const handleAdd = () => {
    setAddTodo((currentstate) => [...currentstate, todolist]);
  };

  return (
    <View style={{ padding: 50 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <TextInput
          placeholder="Enter Items"
          style={{
            width: "80%",
            borderBottomColor: "black",
            borderBottomWidth: 1,
          }}
          onChangeText={handleTodoList}
          value={todolist}
        />
        <Button title="ADD" onPress={handleAdd} />
      </View>
      <View>
        <Text>this is for testig </Text>
      </View>
      <ScrollView>
        {addTodo.map((items) => (
          <View style={styles.listitem}>
            <Text>{items}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  listitem: {
    padding: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
  },
});
