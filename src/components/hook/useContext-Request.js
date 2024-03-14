import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useContext, useEffect, useState } from "react";


const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [ingreso, setIngreso] = useState(0);
  const [gastos, setGastos] = useState(0);
  const [User, setUser] = useState("1");
  const [Pass, setPass] = useState("");
  const [secretWord, setSecretword] = useState("");

  useEffect(() => {
    const retrieveData = async () => {
      try {
        const savedIngreso = await AsyncStorage.getItem("@mySuperStore:ingreso");
        const savedGastos = await AsyncStorage.getItem("@mySuperStore:gastos");
        const savedUser = await AsyncStorage.getItem("@mySuperStore:User");
        const savedPass = await AsyncStorage.getItem("@mySuperStore:Pass");
        const savedSecretWord = await AsyncStorage.getItem("@mySuperStore:secretWord");
        if (savedIngreso !== null) {
          setIngreso(JSON.parse(savedIngreso));
        }
        if (savedGastos !== null) {
          setGastos(JSON.parse(savedGastos));
        }
        if (savedGastos !== null) {
          setGastos(JSON.parse(savedUser));
        }
        if (savedPass !== null) {
          setPass(JSON.parse(savedPass));
        }
        if (savedIngreso !== null) {
          setSecretword(JSON.parse(savedSecretWord));
        }
      } catch (error) {
        console.log("Error al recuperar los datos:", error);
      }
    };

    retrieveData();

    const interval = setInterval(() => {
      retrieveData();
    }, 1000);

   
    return () => clearInterval(interval);
  }, []);

  const storeData = async (newData, key) => {
    try {
      await AsyncStorage.setItem(`@mySuperStore:${key}`, JSON.stringify(newData));
      if (key === 'ingreso') {
        setIngreso(newData);
      } else if (key === 'gastos') {
        setGastos(newData);
      } else if (key === 'User') {
        setUser(newData);
      }else if (key === 'Pass') {
        setUser(newData);
      }else if (key === "secretWord") {
        setSecretword(newData);
      }
    } catch (error) {
      console.log("Error al guardar los datos:", error);
    }
  };

  return (
    <MyContext.Provider value={{secretWord, setSecretword, Pass,User,setUser,setPass, ingreso, gastos, storeData }}>
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = () => useContext(MyContext);
