import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import * as variables from "../../variables";

const styles = StyleSheet.create({
  root: {
    marginVertical: variables.marginRoot
  }
});


export default function ProfileGallery() {
  return (
    <View style={styles.root}>
      <ScrollView>
        <Text>HELLO</Text>
      </ScrollView>
    </View>
  );
}
