// Navbar.js
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Navbar = ({ screens }) => {
  const navigation = useNavigation(); // Obtén la instancia de navegación
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingTop: 10, backgroundColor: "yellow", marginTop: 25}}>
      {screens.map((screen, index) => {
        return (
          <TouchableOpacity key={index} onPress={() => navigation.navigate(screen.name)}>
            <Text>{screen.name}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default Navbar;
