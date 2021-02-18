import React, {useState} from 'react'
import {  Text, View, FlatList, TouchableOpacity } from 'react-native';


export default function ProductList({}) {
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

        </View>
    );
}


