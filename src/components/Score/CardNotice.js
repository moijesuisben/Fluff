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

export default function CardNotice({ star1, star2, star3, star4, star5 }) {
  return (
    <View>
      <View style={styles.root}>
        <View style={styles.top}>
          <View style={styles.stars}>
            <Icon name="ios-star" style={[styles.star, star1]} />
            <Icon name="ios-star" style={[styles.star, star2]} />
            <Icon name="ios-star" style={[styles.star, star3]} />
            <Icon name="ios-star" style={[styles.star, star4]} />
            <Icon name="ios-star" style={[styles.star, star5]} />
          </View>
          <Text style={styles.date}>Il y a 2 jours</Text>
        </View>
        <Text style={styles.title}>
          Une véritable perle soucieuse du bien-être des animaux
        </Text>
        <Text style={styles.text}>
          Je ne peux que recommander Camille. Une fille fantastique qui s’est
          occupé d’Albert avec beaucoup d’attention. Elle l’a amené aux bords de
          l’Erdre durant toute l’après-midi. Petit bonus, Albert c’était roulé
          dans la boue et elle lui a donné un bain.
        </Text>
      </View>
      <View style={styles.line}></View>
    </View>
  );
}
