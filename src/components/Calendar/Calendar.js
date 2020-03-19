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

  const checked = { selected: true, marked: true, selectedColor: "blue" };

  return (
    <Calendar
      style={styles.root}
      current={"2020-03-17"}
      minDate={"2020-01-01"}
      maxDate={"2020-12-31"}
      onDayPress={day => {
        console.log("selected day", day);
        checked;
      }}
      onDayLongPress={day => {
        console.log("selected day", day);
      }}
      monthFormat={"MMMM yyyy"}
      onMonthChange={month => {
        console.log("month changed", month);
      }}
      hideArrows={false}
      // renderArrow={direction => (
      //   <Icon name='ios-arrow-back' />
      // )}
      renderArrow={direction =>
        <Icon name="ios-arrow-back" />
      }
      hideExtraDays={true}
      disableMonthChange={false}
      //   firstDay={1}
      hideDayNames={false}
      showWeekNumbers={false}
      onPressArrowLeft={substractMonth => substractMonth()}
      onPressArrowRight={addMonth => addMonth()}
      disableArrowLeft={false}
      disableArrowRight={false}
      markedDates={{
        checked
        // '2020-03-10': {selected: true, marked: true, selectedColor: 'blue'},
        // '2020-03-15': {marked: true},
        // '2020-03-3': {marked: true, dotColor: 'red', activeOpacity: 0},
        // '2020-03-20': {disabled: true, disableTouchEvent: true}
      }}
    />
  );
}
