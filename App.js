import React from "react";
import { Router, Stack, Scene, Tabs } from "react-native-router-flux";

import { AppLoading } from "expo";
import { Container } from "native-base";
import * as Font from "expo-font";
import * as variables from "./src/variables";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";
import Header from "./src/components/Layout/Header";
import HeaderProfile from "./src/components/Layout/HeaderProfile";
import Landing from "./src/views/Landing";
import Form1 from "./src/views/Form/Form1";
import Form2 from "./src/views/Form/Form2";
import Form3 from "./src/views/Form/Form3";
import Form4 from "./src/views/Form/Form4";
import Form5 from "./src/views/Form/Form5";
import Result from "./src/views/Result";
import ProfileAbout from "./src/views/Profile/ProfileAbout";
import CustomTabBar from "./src/components/Layout/CustomTabBar";
import CustomTabBarProfile from "./src/components/Layout/CustomTabBarProfile";

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
        <Tabs key="root" 
        hideTabBar={true}
        >
          <Scene
            key="landing"
            component={Landing}
            navigationBarStyle={styles.header}
            renderTitle={<Header />}
          />
          <Scene
            key="form1"
            component={Form1}
            navigationBarStyle={styles.header}
            renderTitle={<Header />}
            left={() => null}
            gesturesEnabled={false}
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
          />
          <Scene
            key="form3"
            component={Form3}
            navigationBarStyle={styles.header}
            renderTitle={<Header />}
            backTitle=" "
            backButtonTintColor={variables.hitGray}
            gesturesEnabled={false}
          />
          <Scene
            key="form4"
            component={Form4}
            navigationBarStyle={styles.header}
            renderTitle={<Header />}
            backTitle=" "
            backButtonTintColor={variables.hitGray}
            gesturesEnabled={false}
          />
          <Scene
            key="form5"
            component={Form5}
            navigationBarStyle={styles.header}
            renderTitle={<Header />}
            backTitle=" "
            backButtonTintColor={variables.hitGray}
            gesturesEnabled={false}
          />
          <Scene
            key="result"
            component={Result}
            navigationBarStyle={styles.header}
            renderTitle={<Header />}
            backTitle=" "
            backButtonTintColor={variables.hitGray}
            gesturesEnabled={false}
          />
          <Tabs tabBarComponent={CustomTabBar}>
            <Scene
              key="profile"
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
          </Tabs>
        </Tabs>
      </Router>
    </Container>
  );
}
