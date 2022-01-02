import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const About = (props) => {
  const { name, image, price, reviews, rating, categories } =
    props.route.params;

  const formattedCategories = categories
    .map((category) => category.title)
    .join(" • ");

  const description = `${formattedCategories} ${
    price ? " • " + price : ""
  } • 💳 • ${rating} ⭐ (${reviews}+)`;
  return (
    <View style={styles.container}>
      <RestaurantImage image={image} />
      <RestaurantName name={name} />
      <RestaurantDescription description={description} />
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 180,
  },
  restTitle: {
    fontSize: 29,
    fontWeight: "600",
    marginTop: 10,
    marginHorizontal: 15,
  },
  restDescription: {
    marginTop: 10,
    marginHorizontal: 15,
    fontWeight: "400",
    fontSize: 15.5,
  },
  container: {
    borderBottomColor: "#eee",
    borderBottomWidth: 1.8,
    paddingBottom: 20,
  },
});

const RestaurantImage = (props) => {
  return (
    <Image
      source={{
        uri: props.image,
      }}
      style={styles.image}
    />
  );
};

const RestaurantName = (props) => {
  return <Text style={styles.restTitle}>{props.name}</Text>;
};

const RestaurantDescription = (props) => {
  return <Text style={styles.restDescription}>{props.description}</Text>;
};
