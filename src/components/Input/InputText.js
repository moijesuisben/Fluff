import React from "react";
import { Form, Item, Input } from "native-base";
import { StyleSheet } from "react-native";

import * as variables from "../../variables";

const styles = StyleSheet.create({
  root: {
  }
});

export default function InputText({ placeholder }) {
  return (
    <Form style={styles.root}>
      <Item>
        <Input placeholder={placeholder} />
      </Item>
    </Form>
  );
}
