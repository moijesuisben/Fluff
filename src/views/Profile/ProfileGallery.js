import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import * as variables from "../../variables";
import profileGallery from "../../data/profileGallery.json";

const styles = StyleSheet.create({
  root: {
    marginVertical: variables.marginRoot,
    alignItems: "center",
  },
  media: {
    height: 315,
    width: 315,
    borderRadius: 6,
    marginBottom: variables.marginRoot,
  },
});


export default function ProfileGallery() {
  return (
    <View style={styles.root}>
      <ScrollView>
        {profileGallery.map((item, index) => (
          <View key={index}>
          <Image style={styles.media} source={{uri: item.media}}/>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
