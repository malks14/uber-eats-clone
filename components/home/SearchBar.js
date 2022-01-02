import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";

const SearchBar = ({ cityHandler }) => {
  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete
        query={{ key: "AIzaSyBMXstpzYFazNqqQyqT0AdEmCXn0I3UDPk" }}
        onPress={(data, details = null) => {
          console.log(data.description);
          const city = data.description.split(",")[0];
          cityHandler(city);
        }}
        styles={{
          textInput: {
            backgroundColor: "#eee",
            borderRadius: 20,
            fontWeight: "700",
            marginTop: 7,
          },
          textInputContainer: {
            backgroundColor: "#eee",
            borderRadius: 50,
            flexDirection: "row",
            alignItems: "center",
            marginRight: 10,
          },
        }}
        placeholder="Search"
        renderLeftButton={() => (
          <View style={styles.searchBarIconL}>
            <Ionicons name="location-sharp" size={24} />
          </View>
        )}
        renderRightButton={() => (
          <View style={styles.searchBtnRight}>
            <AntDesign
              name="clockcircle"
              size={11}
              style={{ marginRight: 8 }}
            />
            <Text>Search</Text>
          </View>
        )}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    flexDirection: "row",
  },
  searchBarIconL: {
    marginLeft: 10,
  },
  searchBtnRight: {
    flexDirection: "row",
    marginRight: 8,
    backgroundColor: "#fff",
    padding: 9,
    borderRadius: 30,
    alignItems: "center",
  },
});
