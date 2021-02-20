import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Alert,
  LogBox,
} from "react-native";
import { CheckBox } from "react-native-elements";
import { RouteNavProps } from "../paramlist/paramList";
import { Product } from "../paramlist/paramList";
import { Card } from "../components/Card";
import { MaterialIcons } from "@expo/vector-icons";
import AddButton from "../components/AddButton";
import TrashButton from "../components/TrashButton";
import { AsyncStorage } from "react-native";
export default function ProductList({
  navigation,
  route,
}: RouteNavProps<"ProductList">) {
  /*
     Functionality of productList
    */

  const removeAll = () => {
    Alert.alert(
      "REMOVE ALL ",
      "All products will be removed",
      [
        { text: "Cancel", style: "cancel" },
        { text: "Remove", onPress: () => setProduct([]) },
      ],
      { cancelable: true }
    );
  };

  const checkProduct = (key: string) => {
    setProduct((prevProducts) =>
      prevProducts.map((product) => {
        return product.key === key
          ? { ...product, checked: !product.checked }
          : product;
      })
    );
  };

  const deleteProduct = (key: string) => {
    setProduct((prevProduct) => {
      return prevProduct.filter((product) => product.key != key);
    });
  };

  const setForDelete = (key: string) => {
    setProduct((prevProducts) =>
      prevProducts.map((product) => {
        return product.key === key
          ? { ...product, toDelete: !product.toDelete }
          : product;
      })
    );
  };

  const submitHandler = (text: string) => {
    if (text.length !== 0) {
      setProduct((prevProduct) => {
        return [
          {
            name: text,
            checked: false,
            toDelete: false,
            key: Math.random().toString(),
          },
          ...prevProduct,
        ];
      });
    }
  };
  const [product, setProduct] = useState<Product[]>([]);

  /*
     Async Storage  for productList
    */

  const STORAGE_KEY = "@product_key";
  const saveData = async () => {
    try {
      AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(product));
    } catch (error) {
      alert("something get wrong with data saving");
    }
  };

  const readData = async () => {
    try {
      const value = await AsyncStorage.getItem(STORAGE_KEY);
      if (value != null) {
        setProduct(JSON.parse(value));
      }
    } catch (error) {
      alert("something get wrong with data reading");
    }
  };

  useEffect(() => {
    readData();
  }, []);

  useEffect(() => {
    saveData();
  }, [product]);


  return (
    <View style={styles.container}>
      <FlatList
        style={styles.content}
        data={product}
        renderItem={({ item }) => (
          <TouchableOpacity onLongPress={() => setForDelete(item.key)}>
            <View>
              <Card>
                <Text>{item.name}</Text>
                <View>
                  {!item.toDelete && (
                    <CheckBox
                      containerStyle={styles.checkbox}
                      iconType="material"
                      checkedIcon="clear"
                      uncheckedIcon="circle"
                      checkedColor="green"
                      checked={item.checked}
                      onPress={() => checkProduct(item.key)}
                    />
                  )}
                  <TouchableOpacity onPress={() => deleteProduct(item.key)}>
                    {item.toDelete && (
                      <MaterialIcons name="delete" size={20} color="black" />
                    )}
                  </TouchableOpacity>
                </View>
              </Card>
            </View>
          </TouchableOpacity>
        )}
      />
      <View style={styles.buttonTrash}>
        <TrashButton
          onPress={() => {
            removeAll();
          }}
        />
      </View>
      <View style={styles.buttonAdd}>
        <AddButton
          text="+"
          onPress={() => {
            navigation.navigate("AddProduct", { submitHandler });
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    flex: 1,
    marginHorizontal: 20,
    marginBottom: 110,
  },
  checkbox: {
    marginRight: -10,
  },
  buttonAdd: {
    flex: 1,
    position: "absolute",
    bottom: 0,
    alignSelf: "flex-end",
    padding: 12,
  },
  buttonTrash: {
    flex: 1,
    position: "absolute",
    bottom: 0,
    alignSelf: "flex-start",
    padding: 12,
  },
});
