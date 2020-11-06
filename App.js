import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Button, FlatList } from "react-native";
import ListItems from "./components/ListItems";
import InputList from "./components/InputList";

export default function App() {
  const [addTodo, setAddTodo] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const handleAdd = (listprop) => {
    setAddTodo((currentstate) => [
      ...currentstate,
      { id: Date.now(), values: listprop },
    ]);
  };

  const removeItem = (itemid) => {
    setAddTodo((currentstate) => {
      return currentstate.filter((item) => item.id !== itemid);
    });
  };
  return (
    <View style={{ padding: 50 }}>
      <Button onPress={() => setIsAddMode(true)} title={"Add New Items"} />
      <InputList visible={isAddMode} AddInput={handleAdd} />
      <View>
        <Text>this is for testig </Text>
      </View>
      <FlatList
        data={addTodo}
        renderItem={(itemslist) => (
          <ListItems
            onPress={() => removeItem(itemslist.item.id)}
            itemslist={itemslist.item.values}
            index={itemslist.index}
          />
        )}
      />
      {/* // <ScrollView>
      //   {addTodo.map((items) => (
      //     <View style={styles.listitem}>
      //       <Text>{items}</Text>
      //     </View>
      //   ))}
      // </ScrollView> */}
    </View>
  );
}

const styles = StyleSheet.create({});
