import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import * as variables from "../../variables";
import AnimalListItem from "../../components/List/AnimalListItem";
import animalData from "../../data/animal.json";

const styles = StyleSheet.create({
  root: {
    marginVertical: variables.marginRoot,
    marginHorizontal: variables.marginRoot
  }
});

export default function ProfileCare() {
  return (
    <ScrollView style={styles.root}>
      {animalData.map((animal, index) => (
        <View key={index}>
          <AnimalListItem
            media={animal.media}
            name={animal.name}
            date={animal.date}
          />
        </View>
      ))}
    </ScrollView>
  );
}
