import React from "react";
import { View, StyleSheet } from "react-native";
import * as variables from "../../variables";
import InputHeading from "../../components/Text/InputHeading";
import InputText from "../../components/Input/InputText";
import Slider from "../../components/Input/Slider";
import SecondaryBtn from "../../components/Button/SecondaryBtn";
import { Actions } from "react-native-router-flux";
import MapView from "react-native-maps";

const styles = StyleSheet.create({
  root: {
    marginHorizontal: variables.marginRoot
  },
  location: {
    marginBottom: 60
  },
  radius: {
    marginBottom: 30
  },
  map: {
    height: 204,
    marginBottom: 47
  },
  nextButton: {
    alignItems: "center"
  },
  infoRadiusTitle: {
    fontFamily: "Montserrat_medium",
    fontSize: 12,
    color: variables.osloGray
  }
});

const onPressBtn = () => {
  Actions["form3"]();
};

export default function Form2() {
  const [sliderOnChanging, setSliderOnChanging] = React.useState(false);
  const [sliderOnValue, setSliderOnValue] = React.useState([5]);
  const sliderOnValuesChangeStart = () => setSliderOnChanging(true);
  const sliderOnValuesChange = values => setSliderOnValue(values);
  const sliderOnValuesChangeFinish = () => setSliderOnChanging(false);
  return (
    <View>
      <View style={styles.location}>
        <InputHeading text="ma localisation" button="me localiser" />
        <InputText placeholder="code postal ou adresse" />
      </View>
      <View style={styles.radius}>
        <InputHeading
          text="dans quel rayon"
          button={sliderOnValue + " km"}
          buttonStyleExtra={styles.infoRadiusTitle}
        />
        <Slider
          values={sliderOnValue}
          sliderLength={355}
          onValuesChangeStart={sliderOnValuesChangeStart}
          onValuesChange={sliderOnValuesChange}
          onValuesChangeFinish={sliderOnValuesChangeFinish}
        />
      </View>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 47.2173,
          longitude: -1.5534,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}
      />
      <View style={styles.nextButton}>
        <SecondaryBtn text="suivant" onPress={onPressBtn} />
      </View>
    </View>
  );
}
