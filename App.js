import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  console.log("React natice");
  return (
    <View style={{padding=50}}>
      <View style={{flexDirection= 'row', justifyContent: "space-between", alignItems="center"}}>
        <TextInput placeholder='Add Item' style={{borderBottomColor: 'black', borderBottonWidth:1}}/>
        <Button title="Add" />
      </View>
      <View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
