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
        <Countdown focusSubject={focusSubject} isPaused={!isStarted} />
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

  countdown: {
    flex: 0.5,
    padding: spacing.xxl,
    width: "100%",
  },
  buttonContainer: {
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
  },
});
