import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import * as variables from "../../variables";

const styles = StyleSheet.create({
  root: {},
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: '100%',
    position: 'absolute',
  },
  textHeader: {
    fontFamily: "Routen",
    fontSize: 60,
    color: variables.peachOrange
  }
});

export default function Header({extraStyle}) {
  return (
    <View style={styles.header}>
      <Text style={[styles.textHeader, extraStyle]}>Fluff</Text>
    </View>
  );
}