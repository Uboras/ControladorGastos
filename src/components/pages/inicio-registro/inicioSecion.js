import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  Button,
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  Alert,
  TouchableOpacity,
} from "react-native";
import CustomButton from "../../assents/customButon"
import { styles } from "../../dada/Colors";
import { useNavigation } from "@react-navigation/native";
import { Color } from "../../dada/Colors";
import { useMyContext } from "../../hook/useContext-Request";


/*
    falta 
    1-gestion de verificacion si esta lleno los campos
    2-gestion de verificacion de usuario correcto
    3-gestion de enviar a home una vez verificado
    
    
  
  */

const InicioSesion = () => {
  const { User, Pass } = useMyContext();
  const [userMoment, setUserMoment] = useState("");
  const [passMoment, setPassMoment] = useState("");
  const [loading, setLoading] = useState(false);
  //navegador de paginas apra los enlaces
  const navigation = useNavigation();

  //Pass mostrar o no
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLoginAuto = () => {
    // Si hay usuario
    if (User !== "") {
      limpiarCampos();
      navigation.navigate("Home");
    } else {
      Alert.alert("No hay usuario Logueado");
    }
  };

  const verificacion = () => {
  

    return (
      User === userMoment &&
      Pass === passMoment &&
      userMoment !== "" &&
      passMoment !== ""
    );
  };

  const limpiarCampos = () => {
    setPassMoment("");
    setUserMoment("");
  };

  const handleLogin = () => {
    verificacion()?[Alert.alert("Iniciado"), navigation.navigate("Home")]
      : Alert.alert("Usuario no Registrado/ \n O datos Incorrectos");
    limpiarCampos();
  };

  return (
    <SafeAreaView>
      {
        //deja escrolear la pantalla por que el teclado ocupa 40% de la pantalla
      }
      <ScrollView style={styles.scrollView}>
        <View style={{ minHeight: `${100}%` }}>
          <View style={{ margin: 40, marginTop: 40 }}>
            <Text style={styles.text}>Bienvenido</Text>
            <View style={{ marginTop: 40, margin: "auto" }}>
              <TextInput
                style={styles.input}
                type="text"
                name="Usuario"
                placeholder="User"
                onChangeText={(text) => setUserMoment(text)}
                value={userMoment}
              />

              
                <TextInput
                  style={styles.input}
                  type="Pass"
                  placeholder="Password"
                  onChangeText={(text) => setPassMoment(text)}
                  value={passMoment}
                  secureTextEntry={!showPassword}
                />
              
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => {
                  navigation.navigate("Recuperar Contraseña");
                  limpiarCampos();
                }}>
                <Text style={[styles.textChico, { color: Color.azul }]}>
                  ¿Olvidaste tu contraseña?
                </Text>
                  <CustomButton
                    title={showPassword ? "Hide Password" : "Show Password"}
                    onPress={toggleShowPassword}
                  />
              </TouchableOpacity>
              <CustomButton
                style={styles.button}
                title="Iniciar Sesión"
                onPress={handleLogin}
              />
              
              <CustomButton
                style={[styles.button, { marginTop: 10 }]}
                title="Iniciar Sesión Automatico"
                onPress={handleLoginAuto}
              />
            </View>
            <View style={{ marginBottom: 10 }}></View>
            <View>
              <Text style={styles.textChico}>¿No tienes cuenta todavia?</Text>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => {
                  navigation.navigate("Registrate");
                  limpiarCampos();
                }}
              >
                <Text style={[styles.textChico, { color: Color.bordo_oscuro }]}>
                  Registrate acá
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          {loading && (
            <View style={styles.loadingContainer}>
              <ActivityIndicator
                size={`${100}%`}
                color="white"
                idesWhenStopped={true}
              />
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default InicioSesion;
