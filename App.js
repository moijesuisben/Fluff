import React from "react";
import { Router, Stack, Scene } from "react-native-router-flux";

import { AppLoading } from "expo";
import { Container } from "native-base";
import * as Font from "expo-font";
import * as variables from "./src/variables";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";
import Header from "./src/components/Layout/Header";
import Landing from "./src/views/Landing";
import Form1 from "./src/views/Form/Form1";
import Form2 from "./src/views/Form/Form2";
import Form3 from "./src/views/Form/Form3";
import Form4 from "./src/views/Form/Form4";
import Form5 from "./src/views/Form/Form5";

const styles = StyleSheet.create({
  /* root: {
    marginHorizontal: 30
  }, */
  header: {
    height: 80,
    borderBottomWidth: 0,
    marginBottom: 55,
    elevation: 0,
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
        <Stack key="root">
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
          {/* <Scene
            key="home"
            component={Home}
            navigationBarStyle={styles.header}
            renderTitle={<Header />}
          />
          <Scene key="contact" component={Contact} title="contact" /> */}
        </Stack>
      </Router>
    </Container>
  );
}
