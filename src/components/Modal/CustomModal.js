import PropTypes from "prop-types";
import React from "react";
import {
  Alert,
  Dimensions,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View
} from "react-native";
import * as variables from "../../variables";

const { width, height } = Dimensions.get("window");

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
    paddingHorizontal: variables.marginRoot * 2,
    alignItems: "center",
    justifyContent: "space-between",
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
  text: {
    fontFamily: "Montserrat_bold",
    fontSize: 16,
    color: variables.osloGray,
    textTransform: "uppercase"
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: '100%'
  },
  confirm: {
    color: variables.peachOrange
  },
  cancel: {
    color: variables.hitGray
  }
});

class CustomModal extends React.Component {
  state = {
    modalVisible: false
  };

  show = () => {
    this.setState({
      modalVisible: true
    });
  };

  hide = () => {
    this.setState({
      modalVisible: false
    });
  };

  render() {
    const { modalVisible } = this.state;

    return (
      <Modal animationType="none" transparent={true} visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modal}>
            <Text style={styles.text}>choisir une heure</Text>
            <View style={styles.buttons}>
              <TouchableHighlight
                onPress={() => {
                  this.hide();
                }}
              >
                <Text style={[styles.text, styles.cancel]}>Annuler</Text>
              </TouchableHighlight>
              <TouchableHighlight
                onPress={() => {
                  this.hide();
                }}
              >
                <Text style={[styles.text, styles.confirm]}>Valider</Text>
              </TouchableHighlight>
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}

CustomModal.propTypes = {};

export default CustomModal;
