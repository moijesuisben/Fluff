import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import * as variables from "../../variables";
import CardNotice from "../../components/Score/CardNotice";

const styles = StyleSheet.create({
  root: {
    marginVertical: variables.marginRoot,
  }
});

export default function ProfileScore() {
  return (
    <ScrollView style={styles.root}>
      <Text>Hello ProfileRate</Text>
      <CardNotice />
    </ScrollView>
  );
}
