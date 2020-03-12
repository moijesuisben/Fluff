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
  }
});

export default function PrimaryBtn({ PrimaryBtnText, onPressPrimaryBtn }) {
  return (
    <Button style={styles.button} onPress={onPressPrimaryBtn}>
      <Text>{PrimaryBtnText}</Text>
    </Button>
  );
}
