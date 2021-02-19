import React, {useEffect, useState} from 'react'
import {Button,  TextInput, View, StyleSheet} from 'react-native';
import {RouteNavProps} from "../paramlist/RouteParamList";
import ApproveButton from '../components/approveButton'


export default function AddProduct({navigation, route}:RouteNavProps<'AddProduct'>) {
    const [text, setText]= useState('');
    const changeHandler = (val: string) =>{
        setText(val);
    }
    const {submitHandler} = route.params;
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Type product"
                onChangeText={changeHandler}>
            </TextInput>
            <ApproveButton text="Aprove product" onPress={()=> {
                submitHandler(text)
                navigation.navigate('ProductList')}} />
        </View>
    );
}
const styles = StyleSheet.create(
    {
        container:{
            flex:1,
            backgroundColor:'#fff'
        },
        input:{
            textAlign:"center",
            alignItems: "center",

            paddingHorizontal:8,
            paddingVertical:6,
            marginHorizontal:12,
            marginVertical:22,
            borderBottomWidth:1,
            borderBottomColor:'#ddd',
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 3,
            },
            shadowOpacity: 0.27,
            shadowRadius: 4,
            elevation: 1.25,
        }
    }
)
