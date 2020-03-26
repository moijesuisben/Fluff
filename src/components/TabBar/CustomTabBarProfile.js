import React from "react";
import { StyleSheet, View, Text, TouchableHighlight } from "react-native";
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
  },
  button: {
    flexDirection: "row",
    paddingVertical: variables.marginRoot / 2,
    alignItems: "center",
    justifyContent: "center"
  },
  buttonMessage: {
    backgroundColor: variables.white,
    color: variables.hitGray
  },
  buttonRequest: {
    backgroundColor: variables.peachOrange
  },
  buttonText: {
    textTransform: "uppercase",
    marginLeft: 12,
    fontFamily: "Montserrat_semiBold"
  },
  buttonMessageContent: {
    color: variables.hitGray
  },
  buttonRequestContent: {
    color: variables.white
  }
});

const onPressSentMessage = () => {
  Actions["sentMessage"]();
};

const onPressSentRequest = () => {
  Actions["sentRequest"]();
};

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

export default function CustomTabBarProfile({
  search,
  profile,
  message,
  settings
}) {
  console.log(Actions.currentScene, "cs");
  return (
    <View>
      <TouchableHighlight onPress={onPressSentMessage}>
        <View style={[styles.button, styles.buttonMessage]}>
          <Icon
            style={[styles.icon, styles.buttonMessageContent]}
            name="ios-text"
          />
          <Text style={[styles.buttonText, styles.buttonMessageContent]}>
            Envoyer un message
          </Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight onPress={onPressSentRequest}>
        <View style={[styles.button, styles.buttonRequest]}>
          <Icon
            style={[styles.icon, styles.buttonRequestContent]}
            name="ios-calendar"
          />
          <Text style={[styles.buttonText, styles.buttonRequestContent]}>
            Envoyer une demande
          </Text>
        </View>
      </TouchableHighlight>
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
    </View>
  );
}
