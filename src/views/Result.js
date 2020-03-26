import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableWithoutFeedback,
  Button
} from "react-native";
import { Icon } from "native-base";
import * as variables from "../variables";
import userList from "../data/user.json";
import UserListItem from "../components/List/UserListItem";
import { Actions } from "react-native-router-flux";
import PrimaryBtn from "../components/Button/PrimaryBtn";

const styles = StyleSheet.create({
  root: {
    marginHorizontal: variables.marginRoot
  },
  title: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: variables.marginRoot,
  },
  titleIcon: {
    color: variables.osloGray
  },
  titleText: {
    marginLeft: 18,
    fontFamily: "Montserrat_semiBold",
    fontSize: 16,
    color: variables.osloGray
  },
  item: {
    flexDirection: "row"
  },
  button: {
    backgroundColor: "transparent"
  },
  buttonSearchBlock: {
    alignItems: "center",
  },
  buttonSearch: {
    width: "80%"
  }
});

const onPressProfile = () => {
  Actions["profileAbout"]();
};

const onPressNewSearch = () => {
  Actions["form1"]();
};

export default function Result() {
  return (
    <View>
      <ScrollView>
      <View style={styles.buttonSearchBlock}>
          <PrimaryBtn
            text="Nouvelle recherche"
            onPress={onPressNewSearch}
            buttonStyle={styles.buttonSearch}
          />
        </View>
        <View style={[styles.root, styles.title]}>
          <Icon style={styles.titleIcon} name="ios-arrow-round-back" />
          <Text style={styles.titleText}>Mes résultats</Text>
        </View>
        {userList.map((user, index) => (
          <View key={index}>
            <UserListItem
              media={user.media}
              name={user.name}
              distance={user.distance}
              onPress={onPressProfile}
            />
          </View>
        ))}
        {/* <View style={[styles.root, styles.item]}>
          <Image
            style={{ height: 60, width: 60, borderRadius: 6 }}
            source={require("../media/media1.jpeg")}
          />
          <UserListItem
            media="../../assets/logo/icon.png"
            name="test"
            distance="250"
          />
        </View> */}
      </ScrollView>
    </View>
  );
}
