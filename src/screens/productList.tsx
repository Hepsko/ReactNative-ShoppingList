import React, {useEffect, useState} from 'react'
import {Text, View, FlatList, TouchableOpacity, Button, StyleSheet} from 'react-native';
import { CheckBox } from 'react-native-elements'
import {RouteNavProps} from "../paramlist/RouteParamList";
import {Card} from "../components/card"

export default function ProductList({navigation, route}: RouteNavProps<'ProductList'>) {

    const handleUpdateProducts = (key: string) => {
        setProduct((prevProducts) =>
            prevProducts.map((product) => {
                return product.key === key ? { ...product, checked: !product.checked } : product;
            }),
        );
    }


    const submitHandler = (text: string)=>{
        if(text.length !== 0){
            setProduct((prevProduct)=>
            {
                return [{name: text,checked: false, key: Math.random().toString() }, ...prevProduct ]
            })
        }
    }

    const [product, setProduct] = useState([{name:'example',checked: false, key:'1'}]);


    return (
        <View>
            <FlatList
                data={product}
                renderItem={({item})=>(
                    <TouchableOpacity>
                        <Card>
                            <Text>{item.name}</Text>
                            <View>
                                <CheckBox
                                    iconType='material'
                                    checkedIcon='clear'
                                    uncheckedIcon='circle'
                                    checkedColor='green'
                                    checked={item.checked}
                                    onPress={() =>handleUpdateProducts(item.key)}
                                />
                            </View>
                        </Card>
                    </TouchableOpacity>
                )}
            />
            <Button title="+" onPress={()=> {navigation.navigate('AddProduct', {submitHandler})}}/>
        </View>
    );
}




