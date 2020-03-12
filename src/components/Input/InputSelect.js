import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, Text } from 'native-base';

const styles = StyleSheet.create({
    root:{},
});

export default function InputSelect({TextInput}) {

    return (
        <Button transparent>
            <Text>{TextInput}</Text>
        </Button>
    );
}