import React from "react";
import { Text } from "native-base";
import { View, StyleSheet, Image, ScrollView } from "react-native";
import * as variables from "../../variables";
import animalProfileAbout from "../../data/animalProfileAbout.json";
import CardProfileAnimal from "../../components/Card/CardProfileAnimal";

const styles = StyleSheet.create({
  root: {
    marginTop: variables.marginRoot,
    marginHorizontal: variables.marginRoot
  },
  title: {
    fontFamily: "Montserrat_semiBold",
    fontSize: 22,
    color: variables.trout
  },
  text: {
    fontFamily: "Montserrat_regular",
    fontSize: 12,
    color: variables.trout,
    lineHeight: 20,
    marginTop: 10,
    marginBottom: 30
  },
  cardsAnimal: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%"
  }
});

export default function ProfileAbout() {
  return (
    <View style={styles.root}>
      <ScrollView>
        <Text style={styles.title}>
          J'aime sortir au Parc de Procé le samedi matin
        </Text>
        <Text style={styles.text}>
          Bonjour ! Je m’appelle Camille, j’ai 26 ans. J’ai deux chiens (Otso et
          Bob) et un chat (Skooma). J’habite dans une maison avec un grand
          jardin près du Parc de Procé. Lorsqu’ils ne jouent pas dehors, j’aime
          amener mes deux chiens aux parcs, sinon au bord de la mer !
        </Text>
        <Text style={styles.title}>Mes compagnons</Text>
        <View style={styles.cardsAnimal}>
          {animalProfileAbout.map((animal, index) => (
            <View key={index}>
              <CardProfileAnimal
                media={animal.media}
                name={animal.name}
                type={animal.type}
              />
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
