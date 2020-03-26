import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import * as variables from "../../variables";

const styles = StyleSheet.create({
  root: {},
  card: {
    justifyContent: "center",
    alignItems: "center"
  },
  media: {
    height: 100,
    width: 100,
    borderRadius: 9,
  },
  name: {
    fontFamily: "Montserrat_medium",
    fontSize: 16,
    marginBottom: 5
  },
  type: {
    fontFamily: "Montserrat_regular",
    fontSize: 10
  }
});

export default function CardProfileAnimal({ media, name, type }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: media }} style={styles.media} resizeMode="cover" />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.type}>{type}</Text>
    </View>
  );
}
