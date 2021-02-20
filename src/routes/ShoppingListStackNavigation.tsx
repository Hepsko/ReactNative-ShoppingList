import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import ProductList from "../screens/ProductList";
import AddProduct from "../screens/ProductAdder";
import { ParamList } from "../paramlist/paramList";
import Header from "../components/Header";

interface RoutersProps {}
export const Navigation: React.FC<RoutersProps> = ({}) => {
  const Stack = createStackNavigator<ParamList>();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ProductList">
        <Stack.Screen
          name={"ProductList"}
          component={ProductList}
          options={{ headerTitle: () => <Header title="Shopping List" /> }}
        />
        <Stack.Screen
          name={"AddProduct"}
          component={AddProduct}
          options={{
            title: "Add Product",
            headerStyle: {
              backgroundColor: "#f01d71",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
