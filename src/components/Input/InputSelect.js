import React from "react";
import { StyleSheet } from "react-native";
import { Button, Text } from "native-base";
import *  as variables from '../../variables/color';

const styles = StyleSheet.create({
  buttonText: {
    fontFamily: "Montserrat_medium",
    fontSize: 15,
    color: variables.trout
  }
});

export default function InputSelect({ TextInput }) {
  return (
    <Button transparent >
      <Text style={styles.buttonText}>{TextInput}</Text>
    </Button>
  );
}
