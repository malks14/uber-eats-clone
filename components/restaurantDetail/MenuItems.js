import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { useDispatch } from "react-redux";
// import Ionicons from "react-native-vector-icons/Ionicons";
// import CheckBox from "@react-native-community/checkbox";
import Checkbox from "expo-checkbox";
import { CheckBox, Icon } from "react-native-elements";
import CheckboxList from "rn-checkbox-list";

const foods = [
  {
    title: "Choripan",
    description: "Amazing argentine sausage inside a home made bread",
    price: "$10.00",
    image:
      "https://t2.uc.ltmcdn.com/images/7/7/5/como_hacer_choripan_42577_orig.jpg",
  },
  {
    title: "Morcipan",
    description: "Delicious blood sausage inside a home made bread",
    price: "$10.00",
    image:
      "https://media-cdn.tripadvisor.com/media/photo-s/12/3f/e8/da/morcipan.jpg",
  },
  {
    title: "Sandwich Vacio",
    description: "Best flank steak sandwich you will find in the city",
    price: "$13.00",
    image:
      "https://todosobreelasado.com/wp-content/uploads/2019/03/S%C3%A1ndwich-de-vacio-470x270.jpg",
  },
  {
    title: "Sandwich de Entraña",
    description: "There are no words for this mouth watering skirt sandwich",
    price: "$15.00",
    image:
      "https://sobransabores.files.wordpress.com/2017/07/dsc_0465-1.jpg?w=2000&h=1200&crop=1pg",
  },
  {
    title: "Ojo de Bife al plato",
    description: "Let the meat do the talking",
    price: "$20.00",
    image:
      "https://saboryestilo.com.mx/wp-content/uploads/2020/05/recetas-de-cocina-Rib-eye-con-salsa-de-cerveza.jpg",
  },
  {
    title: "Fritas",
    description: "One of the best sides for eating meat",
    price: "$5.00",
    image: "https://www.eltiempo.com/uploads/2021/04/15/6078c68c2f49b.jpeg",
  },
];

// function MyCheckbox(props) {
//   const [checked, onChange] = useState(false);

//   return (
//     <Pressable
//       style={[styles.checkboxBase, checked && styles.checkboxChecked]}
//       onPress={() => selectItem(props.food)}
//     >
//       {checked && <Ionicons name="checkmark" size={24} color="white" />}
//     </Pressable>
//   );
// }

const MenuItems = ({ restaurantName }) => {
  const [check2, setCheck2] = useState(false);

  const dispatch = useDispatch();

  const selectItem = (item) =>
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        ...item,
        restaurantName: restaurantName,
      },
    });

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {foods.map((food, index) => {
        return (
          <View key={index}>
            <View style={styles.container}>
              <TouchableOpacity
                style={[styles.checkboxBase, check2 && styles.checkboxChecked]}
                onPress={() => {
                  setCheck2(!check2);
                  selectItem(food);
                }}
              ></TouchableOpacity>

              <View style={styles.menuItemStyle}>
                <FoodInfo food={food} />
                <FoodImage food={food} />
              </View>
            </View>
          </View>
        );
      })}
    </ScrollView>
  );
};

export default MenuItems;

const FoodInfo = (props) => {
  return (
    <View style={styles.foodInfo}>
      <Text style={styles.titleStyle}>{props.food.title}</Text>
      <Text>{props.food.description}</Text>
      <Text>{props.food.price}</Text>
    </View>
  );
};

const FoodImage = (props) => {
  return <Image style={styles.foodImg} source={{ uri: props.food.image }} />;
};

const styles = StyleSheet.create({
  menuItemStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20,
  },

  titleStyle: {
    fontSize: 19,
    fontWeight: "600",
  },
  foodInfo: {
    width: 240,
    justifyContent: "space-evenly",
  },
  foodImg: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  container: {
    borderBottomColor: "#eee",
    borderBottomWidth: 1,
  },
  checkboxBase: {
    width: 24,
    height: 24,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: "green",
    backgroundColor: "transparent",
    marginLeft: 20,
  },

  checkboxChecked: {
    backgroundColor: "green",
  },
});

//  <CheckBox
//    center
//    checkedIcon={
//      <Icon
//        name="radio-button-checked"
//        type="material"
//        color="green"
//        size={25}
//        iconStyle={{ marginRight: 10 }}
//      />
//    }
//    uncheckedIcon={
//      <Icon
//        name="radio-button-unchecked"
//        type="material"
//        color="grey"
//        size={25}
//        iconStyle={{ marginRight: 10 }}
//      />
//    }
//    checked={check4}
//    onPress={() => setCheck4(!check4)}
//  />;
