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
  },
  nextButtonEnable: {
    color: variables.peachOrange
  },
  animalActive: {
    backgroundColor: variables.peachOrange
  },
  animalActiveText: {
    color: "#fff"
  },
  boxActive: {
    backgroundColor: variables.peachOrange
  },
  boxActiveText: {
    color: "white"
  }
});

export default function Form1() {
  const [animalTypeCheck, setAnimalTypeCheck] = useState(null);
  const [serviceTypeCheck, setServiceTypeCheck] = useState(null);

  const onButtonAnimalPress = type => {
    setAnimalTypeCheck(type);
  };

  const onButtonServicePress = type => {
    setServiceTypeCheck(type);
  };

  const onPressBtn = () => {
    setAnimalTypeCheck && setServiceTypeCheck && Actions["form2"]();
  };

  return (
    <View>
      <View style={styles.animalType}>
        <InputHeading text="Je cherche pour mon" />
        <View style={[styles.input, styles.lineSpaceInput, styles.root]}>
          <InputSelect
            text="Oiseau"
            inputStyle={animalTypeCheck === "Oiseau" && styles.animalActive}
            inputStyleText={
              animalTypeCheck === "Oiseau" && styles.animalActiveText
            }
            onPress={() => onButtonAnimalPress("Oiseau")}
          />
          <InputSelect
            text="Poisson"
            inputStyle={animalTypeCheck === "Poisson" && styles.animalActive}
            inputStyleText={
              animalTypeCheck === "Poisson" && styles.animalActiveText
            }
            onPress={() => onButtonAnimalPress("Poisson")}
          />
          <InputSelect
            text="Chien"
            inputStyle={animalTypeCheck === "Chien" && styles.animalActive}
            inputStyleText={
              animalTypeCheck === "Chien" && styles.animalActiveText
            }
            onPress={() => onButtonAnimalPress("Chien")}
          />
        </View>
        <View style={[styles.input, styles.root]}>
          <InputSelect
            text="Reptile"
            inputStyle={animalTypeCheck === "Reptile" && styles.animalActive}
            inputStyleText={
              animalTypeCheck === "Reptile" && styles.animalActiveText
            }
            onPress={() => onButtonAnimalPress("Reptile")}
          />
          <InputSelect
            text="Rongeur"
            inputStyle={animalTypeCheck === "Rongeur" && styles.animalActive}
            inputStyleText={
              animalTypeCheck === "Rongeur" && styles.animalActiveText
            }
            onPress={() => onButtonAnimalPress("Rongeur")}
          />
          <InputSelect
            text="Chat"
            inputStyle={animalTypeCheck === "Chat" && styles.animalActive}
            inputStyleText={
              animalTypeCheck === "Chat" && styles.animalActiveText
            }
            onPress={() => onButtonAnimalPress("Chat")}
          />
        </View>
      </View>

      <View style={styles.serviceType}>
        <View flexDirection="row">
          <BoxInputSelect
            text="hébergement"
            media={require("../../../assets/logo/icon.png")}
            boxStyle={serviceTypeCheck === "hébergement" && styles.boxActive}
            boxStyleText={
              serviceTypeCheck === "hébergement" && styles.boxActiveText
            }
            onPress={() => onButtonServicePress("hébergement")}
          />
          <BoxInputSelect
            text="garde à domicile"
            media={require("../../../assets/logo/icon.png")}
            boxStyle={
              serviceTypeCheck === "garde à domicile" && styles.boxActive
            }
            boxStyleText={
              serviceTypeCheck === "garde à domicile" && styles.boxActiveText
            }
            onPress={() => onButtonServicePress("garde à domicile")}
          />
          <BoxInputSelect
            text="visite à domicile"
            media={require("../../../assets/logo/icon.png")}
            boxStyle={
              serviceTypeCheck === "visite à domicile" && styles.boxActive
            }
            boxStyleText={
              serviceTypeCheck === "visite à domicile" && styles.boxActiveText
            }
            onPress={() => onButtonServicePress("visite à domicile")}
          />
        </View>
        <View flexDirection="row">
          <BoxInputSelect
            text="garderie"
            media={require("../../../assets/logo/icon.png")}
            boxStyle={serviceTypeCheck === "garderie" && styles.boxActive}
            boxStyleText={
              serviceTypeCheck === "garderie" && styles.boxActiveText
            }
            onPress={() => onButtonServicePress("garderie")}
          />
          <BoxInputSelect
            text="promenade"
            media={require("../../../assets/logo/icon.png")}
            boxStyle={serviceTypeCheck === "promenade" && styles.boxActive}
            boxStyleText={
              serviceTypeCheck === "promenade" && styles.boxActiveText
            }
            onPress={() => onButtonServicePress("promenade")}
          />
          <BoxInputSelect
            text="sortie"
            media={require("../../../assets/logo/icon.png")}
            boxStyle={serviceTypeCheck === "sortie" && styles.boxActive}
            boxStyleText={serviceTypeCheck === "sortie" && styles.boxActiveText}
            onPress={() => onButtonServicePress("sortie")}
          />
        </View>
      </View>
      <View style={styles.nextButton}>
        <SecondaryBtn
          disabled={animalTypeCheck === null || serviceTypeCheck === null}
          text="suivant"
          TextStyle={
            animalTypeCheck !== null &&
            serviceTypeCheck !== null &&
            styles.nextButtonEnable
          }
          onPress={onPressBtn}
        />
      </View>
      {/* // TODO Add and connect page info blob */}
    </View>
  );
}
