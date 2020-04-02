import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableHighlight
} from "react-native";
import * as variables from "../../variables";

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  box: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 32,
    paddingBottom: 18,
    borderWidth: 1,
    borderColor: variables.athensGray,
  },
  icon: {
    height: 50,
    width: 50,
    marginBottom: 20
  },
  text: {
    fontFamily: "Montserrat_semiBold",
    fontSize: 10,
    textTransform: "uppercase"
  }
});

export default function BoxInputSelect({ text, media, onPress, boxStyle, boxStyleText }) {
  return (
    <View style={styles.container}>
      <TouchableHighlight onPress={onPress}>
        <View style={[styles.box, boxStyle]}>
          <Image style={styles.icon} source={media} resizeMode="contain"/>
          <Text style={[styles.text, boxStyleText]}>{text}</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
}
