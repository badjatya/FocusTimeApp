import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

// IMPORTING Colors
import Colors from "../../constants/Colors";

// IMPORTING Sizes
import { fontSize, spacing } from "../../constants/sizes";

// Creating Minutes to millisecond function
const minutesToMillisecond = (minutes) => minutes * 1000 * 60;

// Formatting Time
const formatTime = (time) => (time < 10 ? `0${time}` : time);

const Countdown = ({ minutes = 20, isPaused }) => {
  const [millisecond, setMillisecond] = useState(minutesToMillisecond(minutes));

  // Converting back to minute and second so that we can display
  const minute = Math.floor(millisecond / 1000 / 60) % 60;
  const second = Math.floor(millisecond / 1000) % 60;

  return (
    <Text style={styles.text}>
      {formatTime(minute)}:{formatTime(second)}
    </Text>
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
});
