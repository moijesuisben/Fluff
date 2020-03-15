import React from "react";
import { StyleSheet, Text, View } from "react-native";
import * as variables from "../../variables";
import { Container } from "native-base";

const styles = StyleSheet.create({
  root: {
    marginHorizontal: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20
  },
  text: {
    fontSize: 16,
    fontFamily: "Montserrat_bold",
    color: variables.osloGray,
    textTransform: "uppercase",
  },
  button: {
    fontSize: 9,
    fontFamily: "Montserrat_bold",
    color: variables.peachOrange,
    textTransform: "uppercase"
  },
});

export default function InputHeading({ text, button }) {
  return (
    <View style={styles.root}>
      <Text style={styles.text}>{text}</Text>
      <Text style={styles.button}>{button}</Text>
    </View>
  );
}
