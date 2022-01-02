import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const BottomTabs = () => {
  return (
    <View style={styles.container}>
      <Icon icon="home" text="Home" />
      <Icon icon="search" text="Browse" />
      <Icon icon="shopping-bag" text="Grocery" />
      <Icon icon="receipt" text="Orders" />
      <Icon icon="user" text="Account" />
    </View>
  );
};

export default BottomTabs;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    margin: 10,
    marginHorizontal: 30,
    justifyContent: "space-between",
  },
  icon: {
    marginBottom: 3,
    alignSelf: "center",
  },
});

const Icon = (props) => {
  return (
    <TouchableOpacity>
      <View>
        <FontAwesome5 name={props.icon} size={25} style={styles.icon} />
        <Text>{props.text}</Text>
      </View>
    </TouchableOpacity>
  );
};
