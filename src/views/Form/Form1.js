import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import InputHeading from "../../components/Text/InputHeading";
import InputSelect from "../../components/Input/InputSelect";
import BoxInputSelect from "../../components/Input/BoxInputSelect";
import SecondaryBtn from "../../components/Button/SecondaryBtn";
import { Actions } from "react-native-router-flux";
import * as variables from "../../variables";

const styles = StyleSheet.create({
  root: {
    marginHorizontal: variables.marginRoot
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
  nextButton: {
    alignItems: "center"
  }
});

const onPressBtn = () => {
  Actions["form2"]();
};

export default function Form1() {
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
    <View>
      <View style={styles.animalType}>
        <InputHeading text="Je cherche pour mon" />
        <View style={[styles.input, styles.lineSpaceInput, styles.root]}>
          <InputSelect text="Oiseau" onPress={changeColor} />
          <InputSelect text="Poisson" />
          <InputSelect text="Chien" />
        </View>
        <View style={[styles.input, styles.root]}>
          <InputSelect text="Reptile" />
          <InputSelect text="Rongeur" />
          <InputSelect text="Chat" />
        </View>
      </View>

      <View style={styles.serviceType}>
        <View flexDirection="row">
          <BoxInputSelect
            text="hébergement"
            media={require("../../../assets/logo/icon.png")}
          />
          <BoxInputSelect
            text="garde à domicile"
            media={require("../../../assets/logo/icon.png")}
          />
          <BoxInputSelect
            text="visite à domicile"
            media={require("../../../assets/logo/icon.png")}
          />
        </View>
        <View flexDirection="row">
          <BoxInputSelect
            text="garderie"
            media={require("../../../assets/logo/icon.png")}
          />
          <BoxInputSelect
            text="promenade"
            media={require("../../../assets/logo/icon.png")}
          />
          <BoxInputSelect
            text="sortie"
            media={require("../../../assets/logo/icon.png")}
          />
        </View>
      </View>
      <View style={styles.nextButton}>
        <SecondaryBtn text="suivant" onPress={onPressBtn} />
      </View>
      {/* // TODO Add and connect page info blob */}
    </View>
  );
}
