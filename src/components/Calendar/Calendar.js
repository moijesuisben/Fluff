import React from "react";
import { Calendar } from "react-native-calendars";
import { StyleSheet } from "react-native";
import { LocaleConfig } from "react-native-calendars";

const styles = StyleSheet.create({
  root: {
    // borderWidth: 1
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
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

  return (
    <Calendar
      style={styles.root}
      current={"2020-03-17"}
      minDate={"2020-01-01"}
      maxDate={"2020-12-31"}
      onDayPress={day => {
        console.log("selected day", day);
      }}
      onDayLongPress={day => {
        console.log("selected day", day);
      }}
      monthFormat={"MMMM yyyy"}
      onMonthChange={month => {
        console.log("month changed", month);
      }}
      hideArrows={true}
      renderArrow={direction => <Arrow />}
      hideExtraDays={true}
      disableMonthChange={true}
      //   firstDay={1}
      hideDayNames={false}
      showWeekNumbers={false}
      onPressArrowLeft={substractMonth => substractMonth()}
      onPressArrowRight={addMonth => addMonth()}
      disableArrowLeft={true}
      disableArrowRight={true}
    />
  );
}
