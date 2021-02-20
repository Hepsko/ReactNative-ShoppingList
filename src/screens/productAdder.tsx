import React, { useEffect, useState } from "react";
import {
  TextInput,
  View,
  StyleSheet,
  AsyncStorage,
  FlatList,
  TouchableOpacity,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { RouteNavProps } from "../paramlist/RouteParamList";
import AddButton from "../components/addButton";
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
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container}>
        <TextInput
          value={text}
          onFocus={() => setVisable(true)}
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
                style={styles.suggestion}
                onPress={() => {
                  setText(item.suggestion);
                  setVisable(false);
                }}
              >
                <Text>{item.suggestion}</Text>
              </TouchableOpacity>
            )}
          />
        )}
        <View style={styles.buttonPosition}>
          <AddButton
            text="+"
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
      </View>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  input: {
    fontWeight: "bold",
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
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 1.4,
  },
  suggestions: {
    flex: 1,
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
    borderStyle: "dashed",
    borderColor: "pink",
  },
  buttonPosition: {
    flex: 1,
    position: "absolute",
    bottom: 0,
    alignSelf: "flex-end",
    padding: 12,
  },
});
