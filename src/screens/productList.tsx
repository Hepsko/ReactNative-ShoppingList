import React, {useState} from 'react'
import {Text, View, FlatList, TouchableOpacity, Button} from 'react-native';
import {RouteNavProps} from "../paramlist/RouteParamList";


export default function ProductList({navigation, route}: RouteNavProps<'ProductList'>) {

    const [product, setProduct] = useState([{name:'example', key:'1'}]);
    const {productToAdd} = route.params;

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
            <Button title="+" onPress={()=> {navigation.navigate('AddProduct')}}/>
        </View>
    );
}


