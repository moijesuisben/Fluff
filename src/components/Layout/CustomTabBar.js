import React from "react";
import { StyleSheet, View } from "react-native";
import { Icon } from "native-base";
import * as variables from "../../variables";
import { Actions } from "react-native-router-flux";

const styles = StyleSheet.create({
  root: {},
  background: {
    backgroundColor: variables.white
  },
  block: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: variables.marginRoot * 2
  },
  text: {
    fontSize: 20
  },
  icon: {
    marginVertical: variables.marginRoot,
    color: variables.osloGray
  }
});

export default function CustomTabBar({home, person, text, build}) {
  // if (Actions.currentScene === "_profile") {
  //     console.log("hola");
  //   } else {
  //     console.log("pas hola", '//', Actions.currentScene, 'ici');
  //   }

  return (
    <View style={styles.background}>
      <View style={styles.block}>
        <Icon style={[styles.icon, home]} name="ios-home" />
        <Icon style={[styles.icon, person]} name="ios-person" />
        <Icon style={[styles.icon, text]} name="ios-text" />
        <Icon style={[styles.icon, build]} name="ios-build" />
      </View>
    </View>
  );
}
