import React from "react";
import { Button, Text } from "native-base";
import { StyleSheet } from "react-native";
import * as variables from "../../variables/color";

const styles = StyleSheet.create({
  root: {},
  button: {
    backgroundColor: variables.rajah,
    width: "100%",
    justifyContent: 'center',
    height: 50
  },
  buttonText: {
    textTransform: "uppercase",
    fontFamily: 'Montserrat_bold',
    fontSize: 12,
    shadowColor: variables.athensGray
  }
});

export default function PrimaryBtn({ PrimaryBtnText, onPressPrimaryBtn }) {
  return (
    <Button style={styles.button} onPress={onPressPrimaryBtn}>
      <Text style={styles.buttonText}>{PrimaryBtnText}</Text>
    </Button>
  );
}
