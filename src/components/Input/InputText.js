import React from "react";
import { Form, Item, Input } from "native-base";
import { StyleSheet } from "react-native";

import * as variables from "../../variables";

const styles = StyleSheet.create({
  root: {
    marginStart: 10,
    marginEnd: 30
  },
  input: {
    fontFamily: "Montserrat_regular",
    fontSize: 12,
    color: variables.trout
  }
});

export default function InputText({ placeholder, onChangeText, value }) {
  return (
    <Form style={styles.root}>
      <Item>
        <Input
          placeholder={placeholder}
          style={styles.input}
          onChangeText={onChangeText}
          value={value}
        />
      </Item>
    </Form>
  );
}
