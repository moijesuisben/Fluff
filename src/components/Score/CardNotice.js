import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Icon } from "native-base";
import * as variables from "../../variables";

const styles = StyleSheet.create({
  root: {
    marginHorizontal: variables.marginRoot
  },
  top: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  stars: {
    flexDirection: "row"
  },
  star: {
    fontSize: 20,
    marginTop: 10,
    marginHorizontal: 2,
    color: variables.anakiwa
  },
  date: {
    fontFamily: "Montserrat_regular",
    fontSize: 10,
    color: variables.hitGray
  },
  title: {
    fontFamily: "Montserrat_semiBold",
    fontSize: 16,
    color: variables.trout,
    marginVertical: 15,
    lineHeight: 20
  },
  text: {
    fontFamily: "Montserrat_regular",
    fontSize: 12,
    color: variables.trout,
    lineHeight: 20
  },
  line: {
    marginVertical: 21,
    borderBottomColor: variables.mystic,
    borderBottomWidth: 1,
    width: "100%"
  }
});

export default function CardNotice({ stars, star1, star2, star3, star4, star5, date, title, text }) {
  return (
    <View>
      <View style={styles.root}>
        <View style={styles.top}>
          <View style={styles.stars}>
            <Icon name="ios-star" style={[styles.star, stars < 1 && star1]} />
            <Icon name="ios-star" style={[styles.star, stars < 2 && star2]} />
            <Icon name="ios-star" style={[styles.star, stars < 3 && star3]} />
            <Icon name="ios-star" style={[styles.star, stars < 4 && star4]} />
            <Icon name="ios-star" style={[styles.star, stars < 5 && star5]} />
          </View>
          <Text style={styles.date}>{date}</Text>
        </View>
        <Text style={styles.title}>
          {title}
        </Text>
        <Text style={styles.text}>
          {text}
        </Text>
      </View>
      <View style={styles.line}></View>
    </View>
  );
}
