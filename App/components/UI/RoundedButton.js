import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

// IMPORTING Colors
import Colors from "../../constants/Colors";

const RoundedButton = ({
  style = {},
  textStyle = {},
  size = 125,
  ...props
}) => {
  return (
    <TouchableOpacity
      style={[styles(size).radius, style]}
      onPress={props.onPress}
    >
      <Text style={[styles(size).text, textStyle]}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default RoundedButton;

const styles = (size) =>
  StyleSheet.create({
    radius: {
      borderRadius: size / 2,
      width: size,
      height: size,
      alignItems: "center",
      justifyContent: "center",
      borderColor: Colors.white,
      borderWidth: 2,
    },
    text: {
      fontSize: size / 3,
      color: Colors.white,
    },
  });
