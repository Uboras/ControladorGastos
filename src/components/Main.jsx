import React from "react";

import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native';
import Navbar from './assents/navbar';
import MyStack, {screens} from './assents/navigator';
import { screenInicio } from "./dada/menusScreensdata";



const Main = () => {

   return (
      <NavigationContainer>
         <SafeAreaView style={{ flex: 1 }}>
          <MyStack />
         </SafeAreaView>
      </NavigationContainer>

   )


}
export default Main;