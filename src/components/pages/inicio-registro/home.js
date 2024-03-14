import React from "react";
import { View, Text, ScrollView } from "react-native";
import { useMyContext } from "../../hook/useContext-Request";
import { styles } from "../../dada/Colors";
import BarraNav from "../../assents/barraNavegacion"

const HomeScreen = () => {
  const { User } = useMyContext();

  return (
  <View style={{flex:1}}>
  <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
  <View style={{ flex: 1, backgroundColor:"black" }}>
  
  </View>
  
  
       <View>
      <BarraNav/>
      </View>
      </ScrollView>
    </View>
  
  );
};

export default HomeScreen;
