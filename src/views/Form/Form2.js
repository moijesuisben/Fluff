import React from "react";
import { View, StyleSheet } from "react-native";
import * as variables from "../../variables";
import InputHeading from "../../components/Text/InputHeading";
import { Form, Item, Input } from "native-base";
import InputText from "../../components/Input/InputText";

const styles = StyleSheet.create({
  root: {},
  location: {},
  radius: {},
  map: {},
  nextButton: {
    alignItems: "center"
  }
});

export default function Form2() {
  return (
    <View>
      <View style={[styles.location, styles.root]}>
        <InputHeading text="ma localisation" button="me localiser" />
        <InputText placeholder="code postal ou adresse" />
      </View>
      <View style={styles.radius}></View>
      <View style={styles.map}></View>
    </View>
  );
}
