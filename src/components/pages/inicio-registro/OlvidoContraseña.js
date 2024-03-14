import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  Alert,
} from "react-native";
import { styles } from "../../dada/Colors";
import { useMyContext } from "../../hook/useContext-Request";
import CustomButton from "../../assents/customButon";

const OlvidoContrasena = () => {
  const { User, Pass, secretWord } = useMyContext();
  const [palabraSecreta, setPalabraSecreta] = useState("");

  const verificacion = () => {
    return palabraSecreta !== "";
  };

  const Mostar = () => {
    if (!verificacion()) {
      return Alert.alert("Campo requerido");
    }
    if (secretWord === "" || User === "")
      return Alert.alert("No hay usuario registrado");
    if (secretWord == palabraSecreta) {
      Alert.alert(`Usuario: ${User} ${"\n"}Contraseña: -${Pass}`);
    } else {
      Alert.alert("Palabra Incorrecta");
    }
  };

  return (
    <View style={{ minHeight: `${100}%`, marginTop: 40}}>
        <Text style={[styles.text ]}>
          Recupera tu {"\n"}Usuario y Password
        </Text>
      <View style={{ margin: 40 , marginBottom: 60 }}>
        <TextInput
          style={[styles.input , {marginBottom: 40}]}
          type="text"
          name="PalabraSecreta"
          placeholder="PalabraSecreta"
          onChangeText={(text) => setPalabraSecreta(text)}
          value={palabraSecreta}
        />
        <CustomButton style={styles.button} title="Mostar Usuario" onPress={Mostar} />
      </View>
    </View>
  );
};
export default OlvidoContrasena;
