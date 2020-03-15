import React from "react";
import { Button, Text } from "native-base";
import { StyleSheet } from "react-native";
import * as variables from "../../variables";

const styles = StyleSheet.create({
  root: {},
  button: {
    backgroundColor: variables.rajah,
    width: "100%",
    justifyContent: 'center',
    height: 50,
    borderRadius: 6,
    shadowColor: variables.athensGray,
     shadowOpacity: 1,
   /*  elevation: 5,
    shadowRadius: 6, */
    shadowOffset: {
      width: 0,
      height: 0,
    },
  },
  buttonText: {
    textTransform: "uppercase",
    fontFamily: 'Montserrat_bold',
    fontSize: 12,
  }
});

export default function PrimaryBtn({ text, onPress }) {
  return (
    <Button style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{text}</Text>
    </Button>
  );
}
