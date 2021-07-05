import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

// IMPORTING COmponents
import Focus from "./App/features/focus/Focus";

// IMPORTING Colors
import Colors from "./App/constants/Colors";

export default function App() {
  const [focusSubject, setFocusSubject] = useState(null);
  return (
    <View style={styles.container}>
      {focusSubject ? (
        <Text>Here is where I am going to build a timer</Text>
      ) : (
        <Focus />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
});
