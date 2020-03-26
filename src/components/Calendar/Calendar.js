import React from "react";
import { Calendar } from "react-native-calendars";
import { LocaleConfig } from "react-native-calendars";
import { View, Text, StyleSheet } from "react-native";
import { Icon } from "native-base";
import { Directions } from "react-native-gesture-handler";

const styles = StyleSheet.create({
  root: {
    // borderWidth: 1
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1
    // shadowRadius: 1,
    // elevation: 1,
  },
  press: {
    color: "red"
  }
});

export default function CustomCalendar() {
  LocaleConfig.locales["fr"] = {
    monthNames: [
      "Janvier",
      "Février",
      "Mars",
      "Avril",
      "Mai",
      "Juin",
      "Juillet",
      "Août",
      "Septembre",
      "Octobre",
      "Novembre",
      "Décembre"
    ],
    monthNamesShort: [
      "Janv.",
      "Févr.",
      "Mars",
      "Avril",
      "Mai",
      "Juin",
      "Juil.",
      "Août",
      "Sept.",
      "Oct.",
      "Nov.",
      "Déc."
    ],
    dayNames: [
      "Dimanche",
      "Lundi",
      "Mardi",
      "Mercredi",
      "Jeudi",
      "Vendredi",
      "Samedi"
    ],
    dayNamesShort: ["Dim.", "Lun.", "Mar.", "Mer.", "Jeu.", "Ven.", "Sam."],
    today: "Aujourd'hui"
  };
  LocaleConfig.defaultLocale = "fr";

  const [dayPress, setDayPress] = React.useState('2020-03-12');

  console.log(dayPress, "dayPress");

  return (
    <Calendar
      style={[styles.root, dayPress && styles.press]}
      onDayPress={day => {
        setDayPress(day.dateString);
      }}
      monthFormat={"MMMM yyyy"}
      renderArrow={direction => (
        <Icon
          name={direction === "left" ? "ios-arrow-back" : "ios-arrow-forward"}
        />
      )}
      // hideExtraDays
      onPressArrowLeft={substractMonth => substractMonth()}
      onPressArrowRight={addMonth => addMonth()}
      markedDates={{
        [dayPress]: {
          selected: true,
          marked: true,
          disableTouchEvent: true,
          selectedDotColor: "orange"
        }
      }}
    />
  );
}
