import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import InputHeading from "../components/Text/InputHeading";
import InputSelect from "../components/Input/InputSelect";
import InputSelectChecked from "../components/Input/InputSelectChecked";
import BoxInputSelect from "../components/Input/BoxInputSelect";

const styles = StyleSheet.create({
  root: {
    marginHorizontal: 30
  },
  input: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  lineSpaceInput: {
    marginBottom: 20
  }
});

//const [checked, isChecked] = React.useState(null);

export default function Home() {
  return (
    <View>
      <InputHeading inputHeading="Je cherche pour mon"/>
      {/* {isChecked ? ( button plein ) : ( button transparent)} */}
      <View style={[styles.input, styles.lineSpaceInput]}>
        <InputSelect TextInput="Oiseau" />
        <InputSelectChecked TextInput="Poisson" />
        <InputSelect TextInput="Chien" />
      </View>
      <View style={styles.input}>
        <InputSelect TextInput="Reptile" />
        <InputSelectChecked TextInput="Rongeur" />
        <InputSelect TextInput="Chat" />
      </View>
      <View flexDirection="row">
        <BoxInputSelect
          text="hello"
          media={require("../../assets/logo/icon.png")}
        />
        <BoxInputSelect
          text="hello"
          media={require("../../assets/logo/icon.png")}
        />
        <BoxInputSelect
          text="hello"
          media={require("../../assets/logo/icon.png")}
        />
      </View>
      <View flexDirection="row">
        <BoxInputSelect
          text="hello"
          media={require("../../assets/logo/icon.png")}
        />
        <BoxInputSelect
          text="hello"
          media={require("../../assets/logo/icon.png")}
        />
        <BoxInputSelect
          text="hello"
          media={require("../../assets/logo/icon.png")}
        />
      </View>
    </View>
  );
}
