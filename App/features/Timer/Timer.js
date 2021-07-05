import React from "react";
import { StyleSheet, Text, View } from "react-native";

// IMPORTING Colors
import Colors from "../../constants/Colors";

// IMPORTING Sizes
import { fontSize, spacing } from "../../constants/sizes";

const Timer = ({ focusSubject }) => {
  return (
    <View style={styles.container}>
      <View style={styles.taskContainer}>
        <Text style={styles.title}>Focusing on: </Text>
        <Text style={styles.task}>{focusSubject}</Text>
      </View>
    </View>
  );
};

export default Timer;

const styles = StyleSheet.create({
  container: {},
  taskContainer: {
    paddingTop: spacing.md,
  },
  title: {
    color: Colors.white,
    textAlign: "center",
  },
  task: {
    color: Colors.white,
    textAlign: "center",
    fontWeight: "bold",
  },
});
