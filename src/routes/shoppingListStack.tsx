import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native'
import ProductList from '../screens/productList'
import AddProduct from '../screens/productAdder'
import {RouteParamList} from "../paramlist/RouteParamList";
import Header  from "../components/header";

interface RoutersProps{

}
export const Home:React.FC<RoutersProps> = ({}) =>{
    const Stack = createStackNavigator<RouteParamList>();
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="ProductList">
                <Stack.Screen name={"ProductList"} component={ProductList} options={{headerTitle: () => <Header title='Product List'  /> }}/>
                <Stack.Screen name={"AddProduct"} component={AddProduct} options={{
                    title: 'Add Product',
                    headerStyle: {
                        backgroundColor: '#f01d71',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
