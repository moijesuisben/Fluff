import React from "react";
import { Router, Stack, Scene } from "react-native-router-flux";

import { AppLoading } from "expo";
import { Container, Text } from "native-base";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import Home from "./src/views/home";
import Contact from "./src/views/contact";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  root: {}
});

export default function App() {
  const [isReady, setIsReady] = React.useState(false);

  React.useEffect(() => {
    const load = async () => {
      await Font.loadAsync({
        Roboto: require("native-base/Fonts/Roboto.ttf"),
        Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
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
    <Container>
      <Router>
        <Stack key="root">
          <Scene key="home" component={Home} title="Home" />
          <Scene key="contact" component={Contact} title="contact" />
        </Stack>
      </Router>
    </Container>
  );
}
