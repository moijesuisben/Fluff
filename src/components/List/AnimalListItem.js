import React from "react";
import { View, Text, ScrollView, StyleSheet, Image } from "react-native";
import * as variables from "../../variables";

const styles = StyleSheet.create({
  blocks: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  block: {
    flexDirection: "row",
    alignItems: "center"
  },
  media: {
    width: 40,
    height: 40,
    borderRadius: 6,
    marginRight: 17
  },
  name: {
    fontFamily: "Montserrat_semiBold",
    fontSize: 16,
    color: variables.trout
  },
  date: {
    fontFamily: "Montserrat_regular",
    fontSize: 12,
    color: variables.hitGray
  }
});

export default function AnimalListItem({media, name, date}) {
  return (
    <View style={styles.blocks}>
      <View style={styles.block}>
        <Image
          source={{uri: media}}
          style={styles.media}
        />
        <Text style={styles.name}>{name}</Text>
      </View>
      <Text style={styles.date}>{date}</Text>
    </View>
  );
}
