import React, { useState } from "react";
import { View, StyleSheet, Image } from "react-native";
import * as variables from "../../variables";
import InputHeading from "../../components/Text/InputHeading";
import CustomCalendar from "../../components/Calendar/Calendar";
import SecondaryBtn from "../../components/Button/SecondaryBtn";
import { Actions } from "react-native-router-flux";
import DateTimePickerModal from "react-native-modal-datetime-picker";


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
  },
  select: {
    color: variables.peachOrange
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

export default function Form3() {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [timeSelect, setTimeSelect] = useState(false);
  const [daySelect, setDaySelect] = useState(false);

  const onPressBtn = () => {
    (timeSelect && Actions["form5"]()) || (daySelect && Actions["form5"]());
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
    setTimeSelect(true);
    setDaySelect(false);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
    setTimeSelect(false);
  };

  const handleConfirm = date => {
    hideDatePicker();
    setTimeSelect(true);
  };

  const dayCheck = () => {
    setDaySelect(true);
    setTimeSelect(false);
  };

  return (
    <View>
      <InputHeading
        text="date de fin"
        style={styles.root}
        buttonStyleExtra={styles.infoDateTitle}
      />
      <View style={styles.calendar}>
        <CustomCalendar />
      </View>
      <View style={[styles.calendarButton, styles.root]}>
        <SecondaryBtn
          text="choisir une heure"
          TextStyle={[styles.CalendarButtonText, timeSelect && styles.select]}
          onPress={showDatePicker}
        />
        <SecondaryBtn
          text="toute la journée"
          TextStyle={[styles.CalendarButtonText, daySelect && styles.select]}
          onPress={dayCheck}
        />
      </View>
      <View style={styles.nextButton}>
        <SecondaryBtn
          text="suivant"
          onPress={onPressBtn}
          TextStyle={
            (daySelect && styles.select) || (timeSelect && styles.select)
          }
        />
      </View>

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="time"
        locale="fr_FR"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        headerTextIOS="Choisir une heure"
        cancelTextIOS="Annuler"
        confirmTextIOS="Confirmer"
      />
      <View style={styles.blobBox}>
      <Image style={styles.blob} source={require("../../../assets/media/picto/blob/blob4_5.png")} resizeMode="contain"/>
      </View>
    </View>
  );
}
