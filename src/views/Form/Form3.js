import React from "react";
import { View, Text, StyleSheet } from "react-native";
import * as variables from "../../variables";
import InputHeading from "../../components/Text/InputHeading";
import CustomCalendar from "../../components/Calendar/Calendar";
import SecondaryBtn from "../../components/Button/SecondaryBtn";
import { Actions } from "react-native-router-flux";
import CustomModal from "../../components/Modal/CustomModal";
import Test from "../../components/Modal/test";

const styles = StyleSheet.create({
  root: {
    marginHorizontal: variables.marginRoot
  },
  calendar: {
    marginTop: 30,
    marginBottom: 35
  },
  infoDateTitle: {
    fontFamily: "Montserrat_medium",
    fontSize: 12,
    color: variables.osloGray
  },
  calendarButton: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  CalendarButtonText: {
    fontSize: 12,
    color: variables.hitGray
  },
  nextButton: {
    marginTop: 47,
    alignItems: "center"
  }
});

const onPressBtn = () => {
  Actions["form4"]();
};

export default function Form3() {
  const modal = React.useRef();

  const onPressModal = () => {
    modal.current.show();
  };

  return (
    <View>
      <InputHeading
        text="date de début"
        style={styles.root}
        button="hello"
        buttonStyleExtra={styles.infoDateTitle}
      />
      <View style={styles.calendar}>
        <CustomCalendar />
      </View>
      <View style={[styles.calendarButton, styles.root]}>
        <SecondaryBtn
          text="choisir une heure"
          TextStyle={styles.CalendarButtonText}
          onPress={onPressModal}
        />
        <SecondaryBtn
          text="toute la journée"
          TextStyle={styles.CalendarButtonText}
        />
      </View>
      <View style={styles.nextButton}>
        <SecondaryBtn text="suivant" onPress={onPressBtn} />
      </View>

      <CustomModal ref={modal} />
    </View>
  );
}
