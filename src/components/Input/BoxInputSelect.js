import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import * as variables from "../../variables";

const styles = StyleSheet.create({
  box: {
    // backgroundColor: variables.athensGray,
    borderWidth: 1,
    borderColor: variables.athensGray,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 32,
    paddingBottom: 18,
    flex: 1,
  },
  icon: {
    height: 50,
    width: 50,
    marginBottom: 20
  },
  text: {
    fontFamily: "Montserrat_semiBold",
    fontSize: 10,
    textTransform: "uppercase"
  }
});

export default function BoxInputSelect({ text, media }) {
  return (
    <View style={styles.box}>
      <Image style={styles.icon} source={media} />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}
