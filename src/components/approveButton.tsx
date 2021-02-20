import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";

export default function ApproveButton({
  text,
  onPress,
}: {
  text: string;
  onPress: any;
}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  button: {
    borderRadius: 5,
    backgroundColor: "#f01d71",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 8,
    marginVertical: 25,
    marginHorizontal: 105,
    padding: 5,
  },
  buttonText: {

    fontStyle:'italic',
    color: "white",
    fontSize: 18,
    textAlign: "center",
  },
});
