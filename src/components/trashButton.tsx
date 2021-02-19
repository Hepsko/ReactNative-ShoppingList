import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import {MaterialIcons} from '@expo/vector-icons'
export default function TrashButton({ onPress }:{ onPress:any}) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.button}>
                <Text style={styles.buttonText}><MaterialIcons
                    name='delete'
                    size={26}
                    color='white'/>
                    </Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        height:75,
        width:75,
        borderRadius: 100,
        paddingBottom:5,
        backgroundColor: '#f01d71',
        justifyContent: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 25,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 5,
    },
    buttonText: {
        textAlign: 'center',
    }
});
