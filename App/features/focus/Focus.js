import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

// IMPORTING From react native paper library
import { TextInput } from "react-native-paper";

// IMPORTING Components
import RoundedButton from "../../components/UI/RoundedButton";

const Focus = ({ addSubject }) => {
  const [tempItem, setTempItem] = useState(null);
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>What would you like to focus</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            onChangeText={(text) => setTempItem(text)}
          />
          <RoundedButton
            title="+"
            size={50}
            onPress={() => addSubject(tempItem)}
          />
        </View>
      </View>
    </View>
  );
};

export default Focus;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textContainer: {
    flex: 0.5,
    justifyContent: "center",
    padding: 16,
  },
  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  inputContainer: {
    paddingTop: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  textInput: {
    flex: 1,
    marginRight: 20,
  },
});
