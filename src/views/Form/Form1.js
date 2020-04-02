import React, { useState } from "react";
import { StyleSheet, View, Image } from "react-native";
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
  },
  blobBox: {
    alignItems: "center",
    marginTop: variables.marginRoot,
  },
  blob: {
    alignItems: "center",
    height: 30,
    width: 210,
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
            media={serviceTypeCheck === "hébergement" ? require("../../../assets/media/picto/hebergementWhite.png") : require("../../../assets/media/picto/hebergement.png")}
            boxStyle={serviceTypeCheck === "hébergement" && styles.boxActive}
            boxStyleText={
              serviceTypeCheck === "hébergement" && styles.boxActiveText
            }
            onPress={() => onButtonServicePress("hébergement")}
          />
          <BoxInputSelect
            text="garde à domicile"
            media={serviceTypeCheck === "garde à domicile" ? require("../../../assets/media/picto/gardeADomicileWhite.png") : require("../../../assets/media/picto/gardeADomicile.png")}
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
            media={serviceTypeCheck === "visite à domicile" ? require("../../../assets/media/picto/visiteWhite.png") : require("../../../assets/media/picto/visite.png")}
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
            media={serviceTypeCheck === "garderie" ? require("../../../assets/media/picto/garderieWhite.png") : require("../../../assets/media/picto/garderie.png")}
            boxStyle={serviceTypeCheck === "garderie" && styles.boxActive}
            boxStyleText={
              serviceTypeCheck === "garderie" && styles.boxActiveText
            }
            onPress={() => onButtonServicePress("garderie")}
          />
          <BoxInputSelect
            text="promenade"
            media={serviceTypeCheck === "promenade" ? require("../../../assets/media/picto/promenadeWhite.png") : require("../../../assets/media/picto/promenade.png")}
            boxStyle={serviceTypeCheck === "promenade" && styles.boxActive}
            boxStyleText={
              serviceTypeCheck === "promenade" && styles.boxActiveText
            }
            onPress={() => onButtonServicePress("promenade")}
          />
          <BoxInputSelect
            text="sortie"
            media={serviceTypeCheck === "sortie" ? require("../../../assets/media/picto/sortieWhite.png") : require("../../../assets/media/picto/sortie.png")}
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
      <View style={styles.blobBox}>
      <Image style={styles.blob} source={require("../../../assets/media/picto/blob/blob1_5.png")} resizeMode="contain"/>
      </View>
    </View>
  );
}
