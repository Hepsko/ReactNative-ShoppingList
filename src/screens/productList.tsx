import React, { useState} from 'react'
import {Text, View, FlatList, TouchableOpacity, Button, StyleSheet} from 'react-native';
import { CheckBox } from 'react-native-elements'
import {RouteNavProps} from "../paramlist/RouteParamList";
import {Card} from "../components/card"
import {MaterialIcons} from '@expo/vector-icons'
import AddButton from '../components/addButton'
import TrashButton from '../components/trashButton'
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
        <View style={styles.container}>
            <FlatList
                style={styles.content}
                data={product}
                renderItem={({item})=>(
                    <TouchableOpacity onLongPress={()=>handleDeleteProducts(item.key)}>
                    <View>
                        <Card>
                            <Text>{item.name}</Text>
                            <View>
                                {  !item.toDelete &&   <CheckBox
                                    containerStyle={styles.checkbox}
                                    iconType='material'
                                    checkedIcon='clear'
                                    uncheckedIcon='circle'
                                    checkedColor='green'
                                    checked={item.checked}
                                    onPress={() =>handleUpdateProducts(item.key)}
                                /> }
                                <TouchableOpacity
                                    onPress={() =>deleteProduct(item.key)}>
                                    { item.toDelete && <MaterialIcons
                                        name='delete'
                                        size={20}
                                        color='black'/>}
                                </TouchableOpacity>
                            </View>
                        </Card>
                       </View>
                    </TouchableOpacity>
                )}
            />
            <View style={styles.buttonTrash}>
                <TrashButton onPress={()=> console.log("xd")}/>
            </View>
            <View style={styles.buttonAdd}>
                <AddButton   text="+" onPress={()=> {navigation.navigate('AddProduct', {submitHandler})}}/>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#fff',
    },
    content:{
        flex:1,
        marginHorizontal:20,
        marginBottom:110
    },
    checkbox:
        {
            marginRight: -10
        },
    buttonAdd: {
        flex: 1,
        position:'absolute',
        bottom:0,
        alignSelf: "flex-end",
        padding: 12
    },
    buttonTrash: {
        flex: 1,
        position:'absolute',
        bottom:0,
        alignSelf: "flex-start",
        padding: 12
    },
})
