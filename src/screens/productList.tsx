import React, { useState} from 'react'
import {Text, View, FlatList, TouchableOpacity, Button, StyleSheet} from 'react-native';
import { CheckBox } from 'react-native-elements'
import {RouteNavProps} from "../paramlist/RouteParamList";
import {Card} from "../components/card"
import {MaterialIcons} from '@expo/vector-icons'

export default function ProductList({navigation, route}: RouteNavProps<'ProductList'>) {

    const handleUpdateProducts = (key: string) => {
        setProduct((prevProducts) =>
            prevProducts.map((product) => {
                return product.key === key ? { ...product, checked: !product.checked } : product;
            }),
        );
    }

    const deleteProduct = (key: string)=>{
        setProduct((prevProduct)=>
        {
            return prevProduct.filter(product => product.key != key)
        })
    }

    const handleDeleteProducts = (key: string) => {
        setProduct((prevProducts) =>
            prevProducts.map((product) => {
                return product.key === key ? { ...product, toDelete: !product.toDelete } : product;
            }),
        );
    }

    const submitHandler = (text: string)=>{
        if(text.length !== 0){
            setProduct((prevProduct)=>
            {
                return [{name: text,checked: false, toDelete: false, key: Math.random().toString() }, ...prevProduct ]
            })
        }
    }
    const [product, setProduct] = useState([{name:'example',checked: false, toDelete: false,key:'1'}]);

    return (
        <View>
            <FlatList
                data={product}
                renderItem={({item})=>(
                    <View>
                        <Card>
                            <Text>{item.name}</Text>
                                {  !item.toDelete &&   <CheckBox
                                    iconType='material'
                                    checkedIcon='clear'
                                    uncheckedIcon='circle'
                                    checkedColor='green'
                                    checked={item.checked}
                                    onPress={() =>handleUpdateProducts(item.key)}
                                    onLongPress={()=>handleDeleteProducts(item.key)}
                                /> }
                                <TouchableOpacity
                                    onPress={() =>deleteProduct(item.key)}>
                                    { item.toDelete && <MaterialIcons
                                        name='delete'
                                        size={20}
                                        color='black'/>
                                    }
                                </TouchableOpacity>
                        </Card>
                    </View>
                )}
            />
            <Button title="+" onPress={()=> {navigation.navigate('AddProduct', {submitHandler})}}/>
        </View>
    );
}




const styles = StyleSheet.create({
    item:{

    }

})
