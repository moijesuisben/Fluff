import React from "react";
import { Button, Text } from "native-base";
import { StyleSheet, View } from "react-native";
import * as variables from "../../variables";

const styles = StyleSheet.create({
  root: {},
  button: {
    justifyContent: "center"
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

export default function SecondaryBtn({ text, onPress, TextStyle }) {
  return (
    <Button transparent style={styles.button} onPress={onPress}>
      <Text style={[styles.buttonText,TextStyle]}>{text}</Text>
    </Button>
  );
}
