import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
const ListItems = ({ itemslist, index, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.2}>
      <View style={styles.listitem}>
        <Text>{itemslist}</Text>
        <Text>{index + 1}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listitem: {
    padding: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
  },
});

export default ListItems;
