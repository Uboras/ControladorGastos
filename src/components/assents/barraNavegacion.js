import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { Color, styles } from "../dada/Colors";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();

  const buttonsData = [
    { imageSource: require("../img/HomeIcon.png"), text: "Home" },
    { imageSource: require("../img/Efectivo.png"), text: "Ingresos" },
    { imageSource: require("../img/Estadisticas.png"), text: "Reportes" },
    { imageSource: require("../img/Tarjetas.png"), text: "Perfil" },
  ];

  return (
    <View style={{ position: "absolute", bottom: 0, left: 0, right: 0 }}>
      <View
        style={{
          flexDirection: "row",
          backgroundColor: Color.amarillo_oscuro,
        }}
      >
        {buttonsData.map((button, index) => (
          <TouchableOpacity
            onPressIn={() => navigation.navigate(button.text)}
            key={index}
            style={{ alignItems: "center", margin: 10, width: "auto" }}
          >
            <Image source={button.imageSource} />
            <Text style={styles.textImagenes}>{button.text}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default HomeScreen;
