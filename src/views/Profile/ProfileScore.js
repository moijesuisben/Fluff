import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import * as variables from "../../variables";
import CardNotice from "../../components/Score/CardNotice";
import profileScore from "../../data/profileScore.json";

const styles = StyleSheet.create({
  root: {
    marginVertical: variables.marginRoot
  }
});

export default function ProfileScore() {
  return (
    <ScrollView style={styles.root}>
      {profileScore.map((score, index) => (
        <View key={index}>
          <CardNotice
            stars={score.stars}
            date={score.date}
            title={score.title}
            text={score.text}
          />
        </View>
      ))}
    </ScrollView>
  );
}
