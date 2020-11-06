import React, { useState } from "react";
import { View, TextInput, Button, Modal } from "react-native";

const InputList = (props) => {
  const [todolist, setTodolist] = useState("");

  const handleTodoList = (inputtext) => {
    setTodolist(inputtext);
  };

  return (
    <Modal visible={props.visible} animationType="slide">
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
        <Button title="ADD" onPress={() => props.AddInput(todolist)} />
      </View>
    </Modal>
  );
};

export default InputList;
