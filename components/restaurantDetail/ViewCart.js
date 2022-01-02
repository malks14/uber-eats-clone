import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const ViewCart = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerBtn}>
        <TouchableOpacity style={styles.cartBtn}>
          <Text style={styles.textCart}>View Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ViewCart;

const styles = StyleSheet.create({
  textCart: {
    color: "white",
    fontSize: 20,
    marginRight: 30,
  },
  cartBtn: {
    marginTop: 20,
    backgroundColor: "black",
    alignItems: "center",
    borderRadius: 30,
    padding: 13,
    width: 300,
    position: "relative",
  },
  containerBtn: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    position: "absolute",
    bottom: 330,
    zIndex: 999,
  },
});
