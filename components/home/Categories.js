import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";

const items = [
  {
    image: require("../../assets/images/shopping-bag.ios.png"),
    text: "Pick-up",
  },
  {
    image: require("../../assets/images/soft-drink.ios.png"),
    text: "Soft Drinks",
  },
  {
    image: require("../../assets/images/bread.png"),
    text: "Bakery Items",
  },
  {
    image: require("../../assets/images/fast-food.ios.png"),
    text: "Fast Foods",
  },
  {
    image: require("../../assets/images/deals.ios.png"),
    text: "Deals",
  },
  {
    image: require("../../assets/images/coffee.ios.png"),
    text: "Coffee & Tea",
  },
  {
    image: require("../../assets/images/desserts.ios.png"),
    text: "Desserts",
  },
];

const Categories = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {items.map((item, index) => {
          return (
            <View style={styles.containerScroll} key={index}>
              <Image style={styles.image} source={item.image} />
              <Text style={styles.imgtext}>{item.text}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 40,
    resizeMode: "contain",
  },
  imgtext: {
    fontSize: 13,
    fontWeight: "900",
  },
  containerScroll: {
    alignItems: "center",
    marginRight: 30,
  },
  container: {
    marginTop: 5,
    backgroundColor: "#fff",
    paddingLeft: 20,
    paddingVertical: 10,
  },
});
