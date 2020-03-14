import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import InputHeading from "../components/Text/InputHeading";
import InputSelect from "../components/Input/InputSelect";
import BoxInputSelect from "../components/Input/BoxInputSelect";
import SecondaryBtn from "../components/Button/SecondaryBtn";

const styles = StyleSheet.create({
  root: {
    marginHorizontal: 30
  },
  animalType: {
    marginBottom: 27
  },
  input: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  lineSpaceInput: {
    marginBottom: 20
  },
  serviceType: {
    marginBottom: 77
  },
});

export default function Home() {
  const [animalTypeCheck, setAnimalTypeCheck] = React.useState(true);

  const changeColor = () => {
    if (animalTypeCheck) {
      style = {
        backgroundColor: "red"
      };
    } else {
      style = {
        backgroundColor: "transparent"
      };
    }
  };
  return (
    <View style={styles.nextButton}>
      <View style={styles.animalType}>
        <InputHeading inputHeading="Je cherche pour mon" />
        <View style={[styles.input, styles.lineSpaceInput, styles.root]}>
          <InputSelect TextInput="Oiseau" onPress={changeColor} />
          <InputSelect TextInput="Poisson" />
          <InputSelect TextInput="Chien" />
        </View>
        <View style={[styles.input, styles.root]}>
          <InputSelect TextInput="Reptile" />
          <InputSelect TextInput="Rongeur" />
          <InputSelect TextInput="Chat" />
        </View>
      </View>

      <View style={styles.serviceType}>
        <View flexDirection="row">
          <BoxInputSelect
            text="hébergement"
            media={require("../../assets/logo/icon.png")}
          />
          <BoxInputSelect
            text="garde à domicile"
            media={require("../../assets/logo/icon.png")}
          />
          <BoxInputSelect
            text="visite à domicile"
            media={require("../../assets/logo/icon.png")}
          />
        </View>
        <View flexDirection="row">
          <BoxInputSelect
            text="garderie"
            media={require("../../assets/logo/icon.png")}
          />
          <BoxInputSelect
            text="promenade"
            media={require("../../assets/logo/icon.png")}
          />
          <BoxInputSelect
            text="sortie"
            media={require("../../assets/logo/icon.png")}
          />
        </View>
      </View>
      <SecondaryBtn text="hohpojo" />
    </View>
  );
}
