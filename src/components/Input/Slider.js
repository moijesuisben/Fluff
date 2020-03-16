import React from "react";
import MultiSlider from "@ptomasroos/react-native-multi-slider";
import { StyleSheet, View } from "react-native";
import * as variables from "../../variables";

const styles = StyleSheet.create({
  root: {
    marginHorizontal: 30
  },
  sliderSelected: {
    backgroundColor: variables.peachOrange,
    height: 3
  },
  trackStyle: {
    backgroundColor: variables.athensGray
  }
});

export default function Slider({
  values,
  onValuesChangeStart,
  onValuesChange,
  onValuesChangeFinish,
  sliderLength
}) {
  return (
    <View style={styles.root}>
      <MultiSlider
        values={values}
        sliderLength={sliderLength}
        onValuesChangeStart={onValuesChangeStart}
        onValuesChange={onValuesChange}
        onValuesChangeFinish={onValuesChangeFinish}
        selectedStyle={styles.sliderSelected}
        trackStyle={styles.trackStyle}
      />
    </View>
  );
}
