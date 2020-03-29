import React from "react";
import { StyleSheet, Modal, View, Text } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";
import PropTypes from "prop-types";
import * as variables from '../../variables';



const styles = StyleSheet.create({
  root: {},
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  modal: {
    backgroundColor: "white",
    borderRadius: 6,
    paddingVertical: variables.marginRoot,
    paddingHorizontal: variables.marginRoot *2,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: 315,
    height: 487
  },
});

export default function Test() {
  const [state, setState] = React.useState({ modalVisible: false });

  const show = () => {
    setState({ modalVisible: true });
  };

  const hide = () => {
    setState({ modalVisible: false });
  };

  const { modalVisible } = state;

  return (
    <Modal animationType="none" transparent={true} visible={modalVisible}>
      <View style={styles.centeredView}>
        <View style={styles.modal}>
          <Text>choisir une heure</Text>
        </View>
        <View style={styles.button}>
          <TouchableHighlight
            onPress={() => {
              hide();
            }}
          >
            <Text>Annuler</Text>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => {
              hide();
            }}
          >
            <Text>Valider</Text>
          </TouchableHighlight>
        </View>
      </View>
    </Modal>
  );
}

Test.propTypes = {};


