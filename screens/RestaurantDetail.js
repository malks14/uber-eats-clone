import React from "react";
import { StyleSheet, Text, View } from "react-native";
import About from "../components/restaurantDetail/About";
import MenuItems from "../components/restaurantDetail/MenuItems";
import ViewCart from "../components/restaurantDetail/ViewCart";

const RestaurantDetail = ({ route, navigation }) => {
  return (
    <View>
      <About route={route} />
      <MenuItems restaurantName={route.params.name} />
      <ViewCart navigation={navigation} restaurantName={route.params.name} />
    </View>
  );
};

export default RestaurantDetail;

const styles = StyleSheet.create({});
