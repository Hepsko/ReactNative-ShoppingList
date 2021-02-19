import React from 'react'
import {StyleSheet, Text, View} from "react-native";

export default function Header({title}:{ title: string}){
    return(
        <View style={styles.header}>
            <View >
                <Text style={styles.headerText}>{title}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create(
    {
        header:{
            width:'100%',
            height: '100%',
            flexDirection: 'row',
            alignItems:'center',
            justifyContent:'center',

        },
        headerText:{
            borderRadius: 10,
            backgroundColor:'#f01d71',
            padding: 8,
            fontWeight:'bold',
            fontSize: 20,
            color: 'white',
            letterSpacing:1,
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 3,
            },
            shadowOpacity: 0.27,
            shadowRadius: 4.65,
            elevation: 6,
        },
    }

)
