import React from "react";
import { View, Text, StyleSheet } from "react-native";
import * as variables from "../../variables";
import PrimaryBtn from "../../components/Button/PrimaryBtn";
import { Actions } from "react-native-router-flux";

const styles = StyleSheet.create({
  root: {
    marginHorizontal: variables.marginRoot
  },
  textContainer: {
    marginBottom: 113
  },
  title: {
    fontFamily: "Montserrat_semiBold",
    fontSize: 50,
    color: variables.osloGray,
    marginBottom: 60
  },
  text: {
    fontFamily: "Montserrat_medium",
    fontSize: 20,
    color: variables.osloGray,
    lineHeight: 34,
    letterSpacing: 1,
    justifyContent: "flex-start"
  },
  textVariable: {
    fontFamily: "Montserrat_bold",
    fontSize: 20,
    color: variables.peachOrange,
    letterSpacing: 1
  },
  confirmButtonStyle: {
      marginBottom: 30,
      backgroundColor: variables.peachOrange,
  },
  confirmButtonTextStyle: {},
  cancelButtonStyle: {
      backgroundColor: 'transparent',
      borderWidth: 2,
      borderColor: variables.peachOrange,
      shadowColor: 'transparent'
  },
  cancelButtonTextStyle: {
      color: variables.peachOrange,
  },
});

const onPressCancel = () => {
    Actions["form1"]();

  };const onPressConfirm = () => {
    Actions["result"]();
  };

export default function Form5() {
  return (
    <View style={styles.root}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Donc</Text>
        <Text style={styles.text}>
          Je cherche pour mon &nbsp;
          <Text style={styles.textVariable}>chien</Text>
          &nbsp;un&nbsp;
          <Text style={styles.textVariable}>hébérgement</Text>
          &nbsp;à&nbsp;
          <Text style={styles.textVariable}>10km</Text>
          &nbsp;du&nbsp;
          <Text style={styles.textVariable}>
            11 boulevard de Longchamp, 44300 Nantes
          </Text>
          &nbsp;du&nbsp;
          <Text style={styles.textVariable}>mardi 6 février</Text>
          &nbsp;au&nbsp;
          <Text style={styles.textVariable}>samedi 10 février</Text>
        </Text>
      </View>
      <PrimaryBtn text="valider" buttonStyle={styles.confirmButtonStyle} buttonTextStyle={styles.confirmButtonTextStyle} onPress={onPressConfirm}/>
      <PrimaryBtn text="annuler" buttonStyle={styles.cancelButtonStyle} buttonTextStyle={styles.cancelButtonTextStyle} onPress={onPressCancel}/>
    </View>
  );
}
