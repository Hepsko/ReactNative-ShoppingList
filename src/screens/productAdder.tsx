import React, {useState} from 'react'
import {Button, Text, TextInput, View} from 'react-native';
import {RouteNavProps} from "../paramlist/RouteParamList";


export default function AddProduct({navigation, route}:RouteNavProps<'AddProduct'>) {
    const [text, setText]= useState('');
    const changeHandler = (val: string) =>{
        setText(val);
    }
    const {submitHandler} = route.params;
    return (
        <View>
            <TextInput
                placeholder="Add product"
                onChangeText={changeHandler}>
            </TextInput>
            <Button onPress={()=> {
                submitHandler(text)
                navigation.navigate('ProductList')}
            } title='Add Product'  color='black' />
        </View>
    );
}
