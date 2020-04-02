import React from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import * as variables from "../../variables";

const styles = StyleSheet.create({
  root: {},
  box: {
    alignItems: "center",
    marginHorizontal: variables.marginRoot
  },
  texts: {
    alignItems: "flex-start",
    width: "90%"
  },
  image: {
    height: 315,
    width: 315,
    borderRadius: 6
  },
  title: {
    fontFamily: "Montserrat_semiBold",
    fontSize: 16,
    color: variables.trout,
    marginTop: 20,
    marginBottom: 5
  },
  text: {
    fontFamily: "Montserrat_regular",
    fontSize: 12,
    color: variables.trout,
    lineHeight: 20
  },
  line: {
    marginVertical: 21,
    borderBottomColor: variables.mystic,
    borderBottomWidth: 1,
    width: "100%"
  }
});

export default function MediaProfileListItem({ onPress, media, title, text }) {
  return (
    <View>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.box}>
          <Image style={styles.image} source={{ uri: media }} />
          <View style={styles.texts}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.text}>{text}</Text>
          </View>
        </View>
        <View style={styles.line}></View>
      </TouchableOpacity>
    </View>
  );
}
