import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";

export type ParamList = {
  ProductList: undefined;
  AddProduct: {
    submitHandler: (text: string) => void;
  };
};

export type RouteNavProps<T extends keyof ParamList> = {
  navigation: StackNavigationProp<ParamList, T>;
  route: RouteProp<ParamList, T>;
};

export type Hints = {
  suggestion: string;
  key: string;
};


export type Product = {
  name: string;
  checked: boolean;
  toDelete: boolean;
  key: string;
};

