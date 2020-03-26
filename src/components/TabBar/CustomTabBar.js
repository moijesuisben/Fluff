import React from "react";
import { StyleSheet, View, TouchableHighlight } from "react-native";
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
    marginHorizontal: variables.marginRoot * 2,
    paddingVertical: variables.marginRoot
  },
  text: {
    fontSize: 20
  },
  icon: {
    // marginVertical: variables.marginRoot,
    color: variables.osloGray
  }
});

const onPressSearch = () => {
  Actions["result"]();
};

const onPressProfile = () => {
  Actions["profileAbout"]();
};

const onPressMessage = () => {
  Actions["message"]();
};

const onPressSettings = () => {
  Actions["settings"]();
};

export default function CustomTabBar({ search, profile, message, settings }) {
  // if (Actions.currentScene === "_profile") {
  //     console.log("hola");
  //   } else {
  //     console.log("pas hola", '//', Actions.currentScene, 'ici');
  //   }

  return (
    <View style={styles.background}>
      <View style={styles.block}>
        <TouchableHighlight onPress={onPressSearch}>
          <Icon style={[styles.icon, search]} name="ios-search" />
        </TouchableHighlight>
        <TouchableHighlight onPress={onPressProfile}>
          <Icon style={[styles.icon, profile]} name="ios-person" />
        </TouchableHighlight>
        <TouchableHighlight onPress={onPressMessage}>
          <Icon style={[styles.icon, message]} name="ios-text" />
        </TouchableHighlight>
        <TouchableHighlight onPress={onPressSettings}>
          <Icon style={[styles.icon, settings]} name="ios-build" />
        </TouchableHighlight>
      </View>
    </View>
  );
}
