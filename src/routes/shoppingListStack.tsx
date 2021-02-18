import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native'
import List from '../components/list'
import AddProduct from '../components/productAdder'

type RootStackParamList = {
    List: undefined,
    AddProduct: undefined
};

interface RoutersProps{

}
export const Home:React.FC<RoutersProps> = ({}) =>{
    const Stack = createStackNavigator<RootStackParamList>();
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="List">
                <Stack.Screen name={"List"} component={List}/>
                <Stack.Screen name={"AddProduct"} component={AddProduct}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
