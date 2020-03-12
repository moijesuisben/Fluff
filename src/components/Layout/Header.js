import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import * as variables from "../../variables/color";

const styles = StyleSheet.create({
  root: {},
  header: {
    flexDirection: "row",
    alignItems: "center"
  },
  logoHeader: {
    height: 60,
    width: 103
  },
  textHeader: {
    fontFamily: "Routen",
    fontSize: 60,
    color: variables.peachOrange
  }
});

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.textHeader}>Fluff</Text>
    </View>
  );
}