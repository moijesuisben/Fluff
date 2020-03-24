import React from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import * as variables from "../../variables";
import { Icon } from "native-base";

const styles = StyleSheet.create({
  root: {},
  box: {
    flexDirection: "row",
    marginLeft: 20,
    alignItems: "center"
  },
  media: {
    height: 60,
    width: 60,
    marginRight: 19,
    borderRadius: 6
  },
  name: {
    fontFamily: "Montserrat_semiBold",
    fontSize: 16,
    color: variables.trout,
    marginBottom: 4
  },
  distance: {
    fontFamily: "Montserrat_regular",
    fontSize: 10,
    color: variables.osloGray
  },
  /* icon: {
    color: variables.osloGray,
  } */
  line: {
    marginVertical: 21,
    borderBottomColor: variables.mystic,
    borderBottomWidth: 1,
    width: "100%"
  }
});

export default function UserListItem({ media, name, distance, onPress }) {
  return (
    <View>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.box}>
          <Image style={styles.media} source={{ uri: media }} resizeMode="cover"/>
          <View>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.distance}>{distance} env.</Text>
          </View>
          {/* <Icon style={styles.icon} name="ios-more" /> */}
        </View>
        <View style={styles.line}></View>
      </TouchableOpacity>
    </View>
  );
}
