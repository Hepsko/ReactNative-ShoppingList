import React, {useState} from 'react'
import {Button, Text, TextInput, View} from 'react-native';
import {StackNavigationProp} from "@react-navigation/stack";
import {RouteParamList} from "../paramlist/RouteParamList";

export default function AddProduct({navigation}:{navigation: StackNavigationProp<RouteParamList, "AddProduct">}) {
    const [text, setText]= useState('');
    const changeHandler = (val: string) =>{
        setText(val);
    }
    return (
        <View>
            <TextInput
                placeholder="new todo"
                onChangeText={changeHandler}>
            </TextInput>
            <Button onPress={()=> console.log('xd')} title='Add Prduct'  color='black' />
        </View>
    );
}
