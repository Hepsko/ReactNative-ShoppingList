import {StackNavigationProp} from "@react-navigation/stack";
import {RouteProp} from "@react-navigation/native";

export type RouteParamList={
    ProductList: undefined,
    AddProduct:
        {
            submitHandler: (text: string) => void
        },
}

export type RouteNavProps<T extends keyof RouteParamList> ={
    navigation: StackNavigationProp<RouteParamList, T>;
    route: RouteProp<RouteParamList, T>
}
