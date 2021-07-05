import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

// IMPORTING Components
import Countdown from "../../components/UI/Countdown";
import RoundedButton from "../../components/UI/RoundedButton";

// IMPORTING Colors
import Colors from "../../constants/Colors";

// IMPORTING Sizes
import { fontSize, spacing } from "../../constants/sizes";

const Timer = ({ focusSubject }) => {
  // State
  const [isStarted, setIsStarted] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown isPaused={!isStarted} />
      </View>

      <View style={styles.taskContainer}>
        <Text style={styles.title}>Focusing on: </Text>
        <Text style={styles.task}>{focusSubject}</Text>
      </View>

      <View style={styles.buttonContainer}>
        {isStarted ? (
          <RoundedButton title="Pause" onPress={() => setIsStarted(false)} />
        ) : (
          <RoundedButton title="Start" onPress={() => setIsStarted(true)} />
        )}
      </View>
    </View>
  );
};

export default Timer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
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
  countdown: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
  },
});
