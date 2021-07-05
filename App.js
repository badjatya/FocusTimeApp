import React, { useState } from "react";
import { StyleSheet, Text, View, Platform } from "react-native";

// IMPORTING components
import Focus from "./App/features/focus/Focus";
import Timer from "./App/features/Timer/Timer";

// IMPORTING Colors
import Colors from "./App/constants/Colors";

// IMPORTING Sizes
import { fontSize, spacing } from "./App/constants/sizes";

export default function App() {
  const [focusSubject, setFocusSubject] = useState("Gardening");
  return (
    <View style={styles.container}>
      {focusSubject ? (
        <Timer focusSubject={focusSubject} />
      ) : (
        <Focus addSubject={setFocusSubject} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "ios" ? spacing.md : spacing.lg,
    backgroundColor: Colors.primary,
  },
});
