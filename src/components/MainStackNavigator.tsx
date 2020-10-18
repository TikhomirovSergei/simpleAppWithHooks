import { createStackNavigator } from "@react-navigation/stack";

import React from "react";
import "react-native-gesture-handler";

import MainScreen from "./screens/MainScreen";

const Stack = createStackNavigator();

const MainStackNavigator = () => {
    return (
        <Stack.Navigator headerMode={"screen"}>
            <Stack.Screen name="Home" component={MainScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
};

export { MainStackNavigator };
