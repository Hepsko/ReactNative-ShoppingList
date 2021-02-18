import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native'
import ProductList from '../components/productList'
import AddProduct from '../components/productAdder'

type RootStackParamList = {
    ProductList: undefined,
    AddProduct: undefined
};

interface RoutersProps{

}
export const Home:React.FC<RoutersProps> = ({}) =>{
    const Stack = createStackNavigator<RootStackParamList>();
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="ProductList">
                <Stack.Screen name={"ProductList"} component={ProductList}/>
                <Stack.Screen name={"AddProduct"} component={AddProduct}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
