import React from 'react';
import { StyleSheet, View } from 'react-native';
import InputHeading from '../components/Text/InputHeading';
import InputSelect from '../components/Input/InputSelect';
import InputSelectChecked from '../components/Input/InputSelectChecked';

const styles = StyleSheet.create({
root: {},
});

export default function Home() {
    return (
        <View>
            <InputHeading inputHeading="Je cherche pour mon"/>
            <InputSelect TextInput="test" />
            <InputSelectChecked TextInput="hola"/>
            {/* {isChecked ? ( button plein ) : ( button transparent)} */}
        </View>
    );
}