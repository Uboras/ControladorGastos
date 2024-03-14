import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { screens } from "../dada/menusScreensdata";
import { styles } from "../dada/Colors";



const Stack = createNativeStackNavigator();



const MyStack = () => {




  return (
    <Stack.Navigator  >
      {screens.map((screen, index) => (
        <Stack.Screen
        style={styles.sidebar }
          key={index}
          name={screen.name}
          component={screen.component}
        />
      ))}
    </Stack.Navigator>
  );
};

export default MyStack;
