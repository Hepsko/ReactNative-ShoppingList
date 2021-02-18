import React, {useState} from 'react'
import {Text, View, FlatList, TouchableOpacity, Button} from 'react-native';
import {StackNavigationProp} from "@react-navigation/stack";
import {RouteParamList} from "../paramlist/RouteParamList";


export default function ProductList({navigation}: {navigation: StackNavigationProp<RouteParamList, "ProductList">}) {
    const [product, setProduct] = useState([{name:'example', key:'1'}]);
    return (
        <View>
            <FlatList
                data={product}
                renderItem={({item})=>(
                    <TouchableOpacity>
                       <Text>{item.name}</Text>
                    </TouchableOpacity>
                )}
            />
            <Button title="Add product" onPress={()=> {navigation.navigate('AddProduct')}}/>
        </View>
    );
}


