import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, Text, View } from "react-native";

// IMPORTING Colors
import Colors from "../../constants/Colors";

// IMPORTING Sizes
import { fontSize, spacing } from "../../constants/sizes";

// IMPORTING components from react native paper
import { ProgressBar } from "react-native-paper";

// Creating Minutes to millisecond function
const minutesToMillisecond = (minutes) => minutes * 1000 * 60;

// Formatting Time
const formatTime = (time) => (time < 10 ? `0${time}` : time);

// NOTE Countdown Component
const Countdown = ({ minutes = 20, isPaused, focusSubject }) => {
  const [millisecond, setMillisecond] = useState(minutesToMillisecond(minutes));
  const [progress, setProgress] = useState(1);

  // Progress Fun
  const onProgress = (progress) => {
    setProgress(progress);
  };

  // Using useRef to create custom hooks for interval
  const interval = useRef(null);

  // Converting back to minute and second so that we can display
  const minute = Math.floor(millisecond / 1000 / 60) % 60;
  const second = Math.floor(millisecond / 1000) % 60;

  // Countdown function
  const countDown = () => {
    setMillisecond((time) => {
      if (time === 0) {
        // TODO: DO MORE STUFF HERE
        return time;
      }
      const timeLeft = time - 1000;
      onProgress(timeLeft / minutesToMillisecond(minutes));
      return timeLeft;
    });
  };

  // Using useEffect
  useEffect(() => {
    if (isPaused) {
      return;
    }
    interval.current = setInterval(countDown, 1000);

    // Clearing
    return () => clearInterval(interval.current);
  }, [isPaused]);

  return (
    <View>
      <Text style={styles.text}>
        {formatTime(minute)}:{formatTime(second)}
      </Text>

      <View style={styles.taskContainer}>
        <Text style={styles.title}>Focusing on: </Text>
        <Text style={styles.task}>{focusSubject}</Text>
      </View>

      <View style={styles.progressContainer}>
        <ProgressBar
          progress={progress}
          style={styles.progress}
          color="#5E84E2"
        />
      </View>
    </View>
  );
};

export default Countdown;

const styles = StyleSheet.create({
  text: {
    fontSize: fontSize.xxl,
    fontWeight: "bold",
    color: Colors.white,
    padding: spacing.lg,
    backgroundColor: "rgba(94,132,226,0.3)",
    textAlign: "center",
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
  progressContainer: {
    paddingTop: spacing.sm,
  },
  progress: {
    height: spacing.sm,
  },
});
