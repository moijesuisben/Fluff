import React from "react";
import { StyleSheet, View, Image, Text, ImageBackground } from "react-native";
import * as variables from "../../variables";
import { Icon } from "native-base";
import profileCategory from "../../data/profileCategory.json";

const styles = StyleSheet.create({
  root: {},
  header: {
    width: "100%",
    height: "100%",
  },
  background: {
    width: "160%",
    height: "120%",
    top: "-25%",
    left: "-30%"
  },
  blockMiddle: {
    flexDirection: "column",
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    width: "100%"
  },
  title: {
    fontFamily: "Routen",
    fontSize: 60,
    color: variables.white,
    marginVertical: 30
  },
  name: {
    fontFamily: "Montserrat_bold",
    fontSize: 24,
    color: variables.white,
    marginBottom: 5
  },
  location: {
    fontFamily: "Montserrat_regular",
    fontSize: 16,
    color: variables.white
  },
  stars: {
    flexDirection: "row"
  },
  star: {
    fontSize: 20,
    marginTop: 10,
    marginHorizontal: 2
  },
  starEnable: {
    color: variables.white
  },
  starDisable: {
    color: variables.hitGray
  },
  blockEnd: {
    width: "100%",
    justifyContent: "flex-start",
    marginTop: 20,
    marginLeft: 30
  },
  imageProfileBlock: {
    height: 66,
    width: 66,
    backgroundColor: variables.white,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6
  },
  imageProfile: {
    height: 60,
    width: 60,
    borderRadius: 6
  },
  categoryBlock: {
    flexDirection: "row",
    width: "90%",
    justifyContent: "space-between",
    top: -10
  },
  categories: {
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center"
  },
  categoryNumber: {
    fontFamily: "Montserrat_semiBold",
    fontSize: 16,
    color: variables.trout,
    marginBottom: 2
  },
  categoryName: {
    fontFamily: "Montserrat_medium",
    fontSize: 12,
    color: variables.trout
  },
  line: {
    borderBottomColor: variables.mystic,
    borderBottomWidth: 1,
    width: "100%"
  },
  lineSelected: {
    width: 60,
    borderBottomWidth: 3,
    borderBottomColor: variables.peachOrange,
  },
});

export default function HeaderProfile({ extraStyle, lineSelected }) {
  return (
    <View style={styles.header}>
      <Image
        source={{
          uri:
            "https://images.unsplash.com/photo-1520466809213-7b9a56adcd45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
        }}
        style={styles.background}
        blurRadius={25}
      />
      <View style={styles.blockMiddle}>
        <Text style={[styles.title, extraStyle]}>Fluff</Text>
        <Text style={styles.name}>Camille</Text>
        <Text style={styles.location}>Nantes, France</Text>
        <View style={styles.stars}>
          <Icon name="ios-star" style={[styles.star, styles.starEnable]} />
          <Icon name="ios-star" style={[styles.star, styles.starEnable]} />
          <Icon name="ios-star" style={[styles.star, styles.starEnable]} />
          <Icon name="ios-star" style={[styles.star, styles.starEnable]} />
          <Icon name="ios-star" style={[styles.star, styles.starDisable]} />
        </View>
        <View style={styles.blockEnd}>
          <View style={styles.imageProfileBlock}>
            <Image
              source={{ uri: "https://i.ibb.co/tqp3XpV/woman.png" }}
              style={styles.imageProfile}
            />
          </View>
          <View style={styles.categoryBlock}>
            {profileCategory.map((category, index) => (
              <View key={index} style={styles.categories}>
                <Text style={styles.categoryNumber}>{category.number}</Text>
                <Text style={styles.categoryName}>{category.category}</Text>
              </View>
            ))}
          </View>
        </View>
        <View style={styles.line}>
          <View style={[styles.lineSelected, lineSelected]}></View>
        </View>
      </View>
    </View>
  );
}
