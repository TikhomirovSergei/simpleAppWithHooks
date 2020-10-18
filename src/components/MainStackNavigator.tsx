import { createStackNavigator } from "@react-navigation/stack";

import React from "react";
import "react-native-gesture-handler";

import TestComponent from "./screens/TestComponent";

const Stack = createStackNavigator();

const MainStackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={TestComponent} />
        </Stack.Navigator>
    );
};

export { MainStackNavigator };
