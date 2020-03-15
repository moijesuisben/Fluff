import React from "react";
import { StyleSheet } from "react-native";
import { Button, Text } from "native-base";
import * as variables from "../../variables/color";

const styles = StyleSheet.create({
  button: {
    backgroundColor: variables.peachOrange
  },
  buttonText: {
    fontFamily: "Montserrat_medium",
    fontSize: 15,
    color: variables.white
  }
});

export default function InputSelectChecked({ text }) {
  return (
    <Button rounded style={styles.button}>
      <Text style={styles.buttonText}>{text}</Text>
    </Button>
  );
}