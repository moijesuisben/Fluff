import React from "react";
import { View, Text, StyleSheet } from "react-native";
import * as variables from "../variables";
import PrimaryBtn from "../components/Button/PrimaryBtn";
import { Actions } from "react-native-router-flux";
import SecondaryBtn from "../components/Button/SecondaryBtn";

const styles = StyleSheet.create({
  root: {
    marginHorizontal: 30
  },
  box: {
    height: "90%",
    justifyContent: "space-between"
  },
  title: {
    fontSize: 50,
    fontFamily: "Montserrat_semiBold",
    letterSpacing: 1,
    color: variables.osloGray,
    marginBottom: 60
  },
  description: {
    fontSize: 20,
    fontFamily: "Montserrat_medium",
    letterSpacing: 1.2,
    lineHeight: 34,
    color: variables.osloGray
  }
});

const onPressBtn = () => {
  Actions["home"]();
};

export default function Landing() {
  return (
    <View style={[styles.box, styles.root]}>
      <View>
        <Text style={styles.title}>Bienvenue</Text>
        <Text style={styles.description}>
          Fluff est une application gratuite basée sur l’entraide qui met en
          relation votre animal de compagnie et leur pet-sitter.
        </Text>
      </View>
      <PrimaryBtn text="démarrer" onPress={onPressBtn} />
    </View>
  );
}
