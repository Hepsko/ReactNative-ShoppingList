import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';

export default function AddButton({ text, onPress }:{text:string, onPress:any}) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>{text}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        height:90,
        width:90,
        borderRadius: 100,
        paddingBottom:5,
        backgroundColor: '#f01d71',
        justifyContent: "center",

    },
    buttonText: {
        color: 'white',

        textTransform: 'uppercase',
        fontSize: 36,
        textAlign: 'center',
    }
});
