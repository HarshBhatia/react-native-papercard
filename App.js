import React from "react";
import { StyleSheet, Text, View } from "react-native";
import EditorScreen from "./screens/EditorScreen";

export default function App() {
  return <EditorScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
