import React, { useState } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

const HeaderTabs = (props) => {
  return (
    <View style={stylesTabs.container}>
      <HeaderButton
        text="Delivery"
        btnColor="black"
        textColor="white"
        activeTab={props.activeTab}
        setActiveTab={props.setActiveTab}
      />
      <HeaderButton
        text="Pickup"
        btnColor="white"
        textColor="black"
        activeTab={props.activeTab}
        setActiveTab={props.setActiveTab}
      />
    </View>
  );
};

export default HeaderTabs;

const stylesTabs = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignSelf: "center",
  },
  btncontainer: {
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 30,
  },
  btntext: {
    fontSize: 15,
    fontWeight: "900",
  },
});

const HeaderButton = (props) => {
  return (
    <TouchableOpacity
      style={[
        stylesTabs.btncontainer,
        { backgroundColor: props.activeTab === props.text ? "black" : "white" },
      ]}
      onPress={() => props.setActiveTab(props.text)}
    >
      <Text
        style={[
          stylesTabs.btntext,
          { color: props.activeTab === props.text ? "white" : "black" },
        ]}
      >
        {props.text}
      </Text>
    </TouchableOpacity>
  );
};
