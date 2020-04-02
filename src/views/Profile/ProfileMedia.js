import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import * as variables from "../../variables";
import MediaProfileListItem from "../../components/List/MediaProfilListItem";
import profileMedia from "../../data/profileMedia.json";
import { Actions } from "react-native-router-flux";


const styles = StyleSheet.create({
  root: {
    marginVertical: variables.marginRoot
  }
});

const onPressGallery = () => {
  Actions["profileGallery"]();
};

export default function ProfileMedia() {
  return (
    <View style={styles.root}>
      <ScrollView>
        {profileMedia.map((item, index) => (
          <View key={index}>
            <MediaProfileListItem
              onPress={onPressGallery}
              media={item.media}
              title={item.title}
              text={item.text}
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
