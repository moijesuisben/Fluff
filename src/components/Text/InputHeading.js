import React from "react";
import { StyleSheet, Text } from "react-native";
import * as variables from "../../variables/color";

const styles = StyleSheet.create({
  root: {
    marginHorizontal: 30
  },
  text: {
    fontSize: 16,
    fontFamily: "Montserrat_bold",
    color: variables.osloGray,
    textTransform: "uppercase",
    marginBottom: 20
  }
});

export default function InputHeading({ inputHeading }) {
  return <Text style={[styles.text, styles.root]}>{inputHeading}</Text>;
}
