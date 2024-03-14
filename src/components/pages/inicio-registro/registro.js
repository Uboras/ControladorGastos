import React, { useState } from "react";
import { Text, View, TextInput, ActivityIndicator, Alert,ScrollView, SafeAreaView, TouchableOpacity  } from "react-native";
import { Color, styles } from "../../dada/Colors";
import { useMyContext } from "../../hook/useContext-Request";
import { useNavigation } from '@react-navigation/native';
import CustomButton from './../../assents/customButon';

/* falta realizar

2- navigator a la pagina home al terminar el registro
3- quitar el mostrado de usuario y contraseña. 
*/

const Registro = () => {
  const navigation = useNavigation()
  const { User, setPass, setUser, Pass, secretWord, setSecretword } = useMyContext();

  const [userMoment, setUsermoment] = useState("");
  const [passmoment, setPassmoment] = useState("");
  const [secretWordmoment, setSecretwordmoment] = useState("");
  const [loading, setLoading] = useState(false);


//verifica si el formulario esta vacio // faltaria que ejecute una verificacion de parametros
 const verification = () => {
    return passmoment !== "" && userMoment !== "" && secretWordmoment !== "";
  };
  
//los envia a El Log in si tiene cuenta ya registrada
  const handleLogIn =()=>{Alert.alert('en preparacion')}

  //realiza el set del usuario y contraseña de coordinar y palabra secreta
  const handleSingin = () => {
 setLoading(true)
    if (User === "") {
      if (verification()) {
        setPass(passmoment);
        setUser(userMoment);
        setSecretword(secretWordmoment);

    setLoading(false)
    Alert.alert("RegistraDo el usuario"); 
    navigation.navigate('Home')
    } else {
        setLoading(false)
        Alert.alert("Error al registrar el usuario");
      }
    }else{
        setLoading(false)
        Alert.alert(`Usuario registrado ${User}-${Pass}-${secretWord}`); 

    }
  };
//ejecuta la vista de todo el componente. 
  return (
    <SafeAreaView style={styles.container}>
    {//deja escrolear la pantalla por que el teclado ocupa 40% de la pantalla
    }
      <ScrollView style={styles.scrollView}>
    
    <View style={{ minHeight: `${100}%` }}>
      <View style={{ margin: 40, marginTop: 40 }}>
        <Text style={styles.text}>Registrate con Nosotros</Text>
        <View style={{ marginTop: 40, margin: "auto" }}>
          <TextInput
            style={styles.input}
            type="text"
            name="Usuario"
            placeholder="User"
            onChangeText={(text) => setUsermoment(text)}
            value={userMoment}
          />

          <TextInput
            style={styles.input}
            type="Password"
            placeholder="Password"
            onChangeText={(text) => setPassmoment(text)}
            value={passmoment}
          />
         
         <TextInput
            style={styles.input}
            type="text"
            placeholder="secretWord"
            onChangeText={(text) => setSecretwordmoment(text)}
            value={secretWordmoment}
          />
          <CustomButton
            style={styles.button}
            title="Registar"
            onPress={handleSingin}
          />
       
         <View>
            {
                // texto para volver al Incio de sesion 
            }
         <Text style={styles.textMedio}> ¿Tienes cuenta ya?</Text>
         <TouchableOpacity
              activeOpacity={0.7}
              onPress={()=>navigation.navigate('Bienvenido')}
            >
              <Text style={[styles.textChico, { color: Color.bordo_oscuro }]}>Toca acá</Text>
            </TouchableOpacity>
         </View>
        </View>
        {
        // Pantalla de carga si hiciera falta
            }
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

export default Registro;