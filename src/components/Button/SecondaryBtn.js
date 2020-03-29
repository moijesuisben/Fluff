import React from "react";
import { Button, Text } from "native-base";
import { StyleSheet, View } from "react-native";
import * as variables from "../../variables";

const styles = StyleSheet.create({
  root: {},
  button: {
    justifyContent: "center",
    backgroundColor: 'transparent',
  },
  buttonText: {
    textTransform: "uppercase",
    fontFamily: "Montserrat_bold",
    fontSize: 16,
    textAlign: "center",
    color: variables.athensGray
  },
  width: {
    justifyContent: "center"
  }
});

export default function SecondaryBtn({ text, onPress, TextStyle, disabled, extraStyle }) {
  return (
    <Button rounded style={[styles.button, extraStyle]} onPress={onPress} disabled={disabled}>
      <Text style={[styles.buttonText,TextStyle]}>{text}</Text>
    </Button>
  );
}
