import React, { useEffect, useState } from "react";
import {
  Button,
  TextInput,
  View,
  StyleSheet,
  AsyncStorage,
  FlatList,
  TouchableOpacity,
  Text,
} from "react-native";
import { RouteNavProps } from "../paramlist/RouteParamList";
import ApproveButton from "../components/approveButton";
import { Hints } from "../paramlist/RouteParamList";
export default function AddProduct({
  navigation,
  route,
}: RouteNavProps<"AddProduct">) {
  /*
    Functionality of productAdder
   */

  const [text, setText] = useState("");
  const [hints, setHints] = useState<Hints[]>([]);
  const [showSuggestion, setShowSuggestion] = useState<Hints[]>();
  const [visable, setVisable] = useState(false);

  const findPattern = (searched: string) => {
    if (searched) {
      const regex = new RegExp(`${searched.trim()}`, "i");
      setShowSuggestion(
        hints.filter((hint) => hint.suggestion.search(regex) >= 0)
      );
    } else {
      setShowSuggestion([]);
    }
  };

  const changeHandler = (val: string) => {
    setText(val);
    findPattern(val);
  };
  const { submitHandler } = route.params;

  /*
      Async Storage  for productAdder - support for input text suggestions
     */

  const STORAGE_KEY = "@hint_key";
  const saveData = async () => {
    try {
      AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(hints));
    } catch (error) {
      alert("something get wrong with data saving");
    }
  };

  const readData = async () => {
    try {
      const value = await AsyncStorage.getItem(STORAGE_KEY);
      if (value != null) {
        setHints(JSON.parse(value));
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
  }, [hints]);

  return (
    <View style={styles.container}>
      <TextInput
        value={text}
        onFocus={() => setVisable(true)}
        autoCompleteType={"username"}
        style={styles.input}
        placeholder="Type product"
        onChangeText={changeHandler}
      />
      {visable && (
        <FlatList
          data={showSuggestion}
          style={styles.suggestions}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                setText(item.suggestion);
                setVisable(false);
              }}
            >
              <View style={styles.suggestion}>
                <Text>{item.suggestion}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      )}
      <ApproveButton
        text="Approve product"
        onPress={() => {
          setHints([
            ...hints.filter((product) => product.suggestion != text),
            { suggestion: text, key: Math.random().toString() },
          ]);

          submitHandler(text);
          navigation.navigate("ProductList");
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  input: {
    textAlign: "center",
    alignItems: "center",
    paddingHorizontal: 8,
    paddingVertical: 6,
    marginHorizontal: 12,
    marginVertical: 22,
    borderBottomWidth: 1,
    marginBottom: 0,
    borderBottomColor: "#ddd",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4,
    elevation: 1.25,
  },
  suggestions: {
    minHeight: 0,
    maxHeight: 150,
  },
  suggestion: {
    textAlign: "center",
    alignItems: "center",
    paddingHorizontal: 8,
    paddingVertical: 8,
    marginHorizontal: 12,
    borderWidth: 2,
    borderColor: "pink",
  },
});
