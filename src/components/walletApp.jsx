import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { AsyncStorage } from 'react-native';

const WalletApp = () => {
  const [ingreso, setIngreso] = useState('');
  const [porcentaje, setPorcentaje] = useState('');

  const handleGuardar = async () => {
          try {
           await AsyncStorage.setItem('@MySuperStore:key', JSON.stringify(ingreso));
           await AsyncStorage.setItem('@MySuperStore:key', JSON.stringify(porcentaje));
      } catch (error) {
console.log('no se aguardado el ingreos ', error)
      }
    };
  

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={{ marginBottom: 20 }}>
        <Text>Dinero que ingresa:</Text>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: 200 }}
          onChangeText={text => setIngreso(text)}
          value={ingreso}
          keyboardType="numeric"
        />
      </View>
      <View style={{ marginBottom: 20 }}>
        <Text>Porcentaje:</Text>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: 200 }}
          onChangeText={text => setPorcentaje(text)}
          value={porcentaje}
          keyboardType="numeric"
        />
      </View>
      <Button
        title="Guardar"
        onPress={handleGuardar}
      />
    </View>
  );
};

export default WalletApp;
