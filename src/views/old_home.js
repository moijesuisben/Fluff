/* import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Actions } from "react-native-router-flux";
import PrimaryBtn from "../components/Button/PrimaryBtn";

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 30
  }
});

const onPressBtn = () => {
  Actions["contact"]();
};

export default function oldHome({ onPressPrimaryBtn }) {
  return (
    <View style={styles.view}>
      <Text>This is contact view</Text>
      <PrimaryBtn PrimaryBtnText="hola" onPressPrimaryBtn={onPressBtn} />
    </View>
  );
}
 */