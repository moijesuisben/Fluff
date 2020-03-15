import React from "react";
import { StyleSheet } from "react-native";
import { Button, Text } from "native-base";
import * as variables from "../../variables";

const styles = StyleSheet.create({
  button: {
    backgroundColor: "transparent",
    elevation: 0,
  },
  buttonText: {
    fontFamily: "Montserrat_medium",
    textTransform: "capitalize",
    fontSize: 15,
    color: variables.trout,
  }
});

export default function InputSelectChecked({ text, onPress }) {
  return (
    <Button rounded style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{text}</Text>
    </Button>
  );
}
