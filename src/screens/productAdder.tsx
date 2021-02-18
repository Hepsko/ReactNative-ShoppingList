import React, {useState} from 'react'
import {Button, Text, TextInput, View} from 'react-native';
import {RouteNavProps} from "../paramlist/RouteParamList";


export default function AddProduct({navigation, route}:RouteNavProps<'AddProduct'>) {
    const [text, setText]= useState('');
    const changeHandler = (val: string) =>{
        setText(val);
    }
    return (
        <View>
            <TextInput
                placeholder="Add product"
                onChangeText={changeHandler}>
            </TextInput>
            <Button onPress={()=> {
                navigation.navigate('ProductList', {productToAdd: text} )}
            } title='Add Product'  color='black' />
        </View>
    );
}
