import React from "react";
import { Router, Stack, Scene, Tabs } from "react-native-router-flux";

import { AppLoading } from "expo";
import { Container } from "native-base";
import * as Font from "expo-font";
import * as variables from "./src/variables";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";
import Header from "./src/components/Header/Header";
import HeaderProfile from "./src/components/Header/HeaderProfile";
import Landing from "./src/views/Landing";
import Form1 from "./src/views/Form/Form1";
import Form2 from "./src/views/Form/Form2";
import Form3 from "./src/views/Form/Form3";
import Form4 from "./src/views/Form/Form4";
import Form5 from "./src/views/Form/Form5";
import Result from "./src/views/Result";
import ProfileAbout from "./src/views/Profile/ProfileAbout";
import ProfileCare from "./src/views/Profile/ProfileCare";
import ProfileMedia from "./src/views/Profile/ProfileMedia";
import ProfileGallery from "./src/views/Profile/ProfileGallery";
import ProfileRate from "./src/views/Profile/ProfileScore";

import CustomTabBar from "./src/components/TabBar/CustomTabBar";
import CustomTabBarProfile from "./src/components/TabBar/CustomTabBarProfile";
import MessageList from "./src/views/Message/MessageList";
import SettingsList from "./src/views/Settings/SettingsList";

const styles = StyleSheet.create({
  /* root: {
    marginHorizontal: 30
  }, */
  header: {
    height: 80,
    borderBottomWidth: 0,
    marginBottom: 55,
    elevation: 0
  },
  headerProfile: {
    width: "100%",
    height: 272,
    borderBottomWidth: 0,
    marginBottom: 55,
    elevation: 0
    // backgroundColor: variables.athensGray,
  }
});

export default function App() {
  const [isReady, setIsReady] = React.useState(false);

  React.useEffect(() => {
    const load = async () => {
      await Font.loadAsync({
        Roboto: require("native-base/Fonts/Roboto.ttf"),
        Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),

        Routen: require("./assets/font/Routen-Regular-export/routen.ttf"),

        Montserrat_regular: require("./assets/font/Montserrat/Montserrat-Regular.ttf"),
        Montserrat_medium: require("./assets/font/Montserrat/Montserrat-Medium.ttf"),
        Montserrat_semiBold: require("./assets/font/Montserrat/Montserrat-SemiBold.ttf"),
        Montserrat_bold: require("./assets/font/Montserrat/Montserrat-Bold.ttf"),

        ...Ionicons.font
      });

      setIsReady(true);
    };

    load();
  }, []);

  if (!isReady) {
    return <AppLoading />;
  }

  return (
    <Container
    //style={styles.root}
    >
      <Router>
        <Tabs key="root">
          <Scene
            key="landing"
            component={Landing}
            navigationBarStyle={styles.header}
            renderTitle={<Header />}
            hideTabBar={true}
          />
          <Scene
            key="form1"
            component={Form1}
            navigationBarStyle={styles.header}
            renderTitle={<Header />}
            left={() => null}
            gesturesEnabled={false}
            hideTabBar={true}
          />
          <Scene
            key="form2"
            component={Form2}
            navigationBarStyle={styles.header}
            renderTitle={<Header />}
            backTitle=" "
            backButtonTintColor={variables.hitGray}
            gesturesEnabled={false}
            animationEnabled={false}
            hideTabBar={true}
          />
          <Scene
            key="form3"
            component={Form3}
            navigationBarStyle={styles.header}
            renderTitle={<Header />}
            backTitle=" "
            backButtonTintColor={variables.hitGray}
            gesturesEnabled={false}
            hideTabBar={true}
          />
          <Scene
            key="form4"
            component={Form4}
            navigationBarStyle={styles.header}
            renderTitle={<Header />}
            backTitle=" "
            backButtonTintColor={variables.hitGray}
            gesturesEnabled={false}
            hideTabBar={true}
          />
          <Scene
            key="form5"
            component={Form5}
            navigationBarStyle={styles.header}
            renderTitle={<Header />}
            backTitle=" "
            backButtonTintColor={variables.hitGray}
            gesturesEnabled={false}
            hideTabBar={true}
          />
          <Scene
            key="result"
            component={Result}
            navigationBarStyle={styles.header}
            renderTitle={<Header />}
            backTitle=" "
            backButtonTintColor={variables.hitGray}
            gesturesEnabled={false}
            hideTabBar={true}
          />
          <Scene
            key="profileAbout"
            component={ProfileAbout}
            navigationBarStyle={styles.headerProfile}
            renderTitle={
              <HeaderProfile lineSelected={{ left: 30, width: 70 }} />
            }
            backTitle=" "
            backButtonTintColor={variables.hitGray}
            gesturesEnabled={false}
            tabBarComponent={CustomTabBarProfile}
          />
          <Scene
            key="profileCare"
            component={ProfileCare}
            navigationBarStyle={styles.headerProfile}
            renderTitle={
              <HeaderProfile lineSelected={{ left: 140, width: 70 }} />
            }
            backTitle=" "
            backButtonTintColor={variables.hitGray}
            gesturesEnabled={false}
            tabBarComponent={CustomTabBarProfile}
          />
          <Scene
            key="profileScore"
            component={ProfileRate}
            navigationBarStyle={styles.headerProfile}
            renderTitle={
              <HeaderProfile lineSelected={{ left: 235, width: 70 }} />
            }
            backTitle=" "
            backButtonTintColor={variables.hitGray}
            gesturesEnabled={false}
            tabBarComponent={CustomTabBarProfile}
          />
          <Scene
            key="profileMedia"
            component={ProfileMedia}
            navigationBarStyle={styles.headerProfile}
            renderTitle={
              <HeaderProfile lineSelected={{ left: 330, width: 70 }} />
            }
            backTitle=" "
            backButtonTintColor={variables.hitGray}
            gesturesEnabled={false}
            tabBarComponent={CustomTabBarProfile}
          />
          <Scene
            key="profileGallery"
            component={ProfileGallery}
            navigationBarStyle={styles.headerProfile}
            renderTitle={
              <HeaderProfile lineSelected={{ left: 330, width: 70 }} />
            }
            backTitle=" "
            backButtonTintColor={variables.hitGray}
            gesturesEnabled={false}
            tabBarComponent={CustomTabBarProfile}
          />
          <Scene
            key="message"
            component={MessageList}
            navigationBarStyle={styles.header}
            renderTitle={<Header />}
            backTitle=" "
            backButtonTintColor={variables.hitGray}
            gesturesEnabled={false}
            tabBarComponent={CustomTabBar}
          />
          <Scene
            key="settings"
            component={SettingsList}
            navigationBarStyle={styles.header}
            renderTitle={<Header />}
            backTitle=" "
            backButtonTintColor={variables.hitGray}
            gesturesEnabled={false}
            tabBarComponent={CustomTabBar}
          />
        </Tabs>
      </Router>
    </Container>
  );
}
