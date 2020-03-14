import React from "react";
import { Router, Stack, Scene } from "react-native-router-flux";

import { AppLoading } from "expo";
import { Container, Text } from "native-base";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";
import * as variables from "./src/variables";
import Header from "./src/components/Layout/Header";
import Landing from "./src/views/Landing";
import Home from "./src/views/Home";

const styles = StyleSheet.create({
  /* root: {
    marginHorizontal: 30
  }, */
  header: {
    height: 80,
    borderBottomWidth: 0,
    marginBottom: 55
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
            key="home"
            component={Home}
            navigationBarStyle={styles.header}
            renderTitle={<Header />}
            left={() => null}
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
