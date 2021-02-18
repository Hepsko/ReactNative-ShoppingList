import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native'
import ProductList from '../screens/productList'
import AddProduct from '../screens/productAdder'
import {RouteParamList} from "../paramlist/RouteParamList";


interface RoutersProps{

}
export const Home:React.FC<RoutersProps> = ({}) =>{
    const Stack = createStackNavigator<RouteParamList>();
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="ProductList">
                <Stack.Screen name={"ProductList"} component={ProductList} initialParams={{ productToAdd: '' }}/>
                <Stack.Screen name={"AddProduct"} component={AddProduct}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
