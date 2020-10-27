import { createStackNavigator } from "@react-navigation/stack";

import React from "react";
import "react-native-gesture-handler";

import CurrentWeatherInfoScreen from "./screens/CurrentWeatherInfoScreen";
import MainScreen from "./screens/MainScreen";

const Stack = createStackNavigator();

const MainStackNavigator = () => {
    return (
        <Stack.Navigator headerMode={"screen"}>
            <Stack.Screen name="MainScreen" component={MainScreen} options={{ headerShown: false }} />
            <Stack.Screen
                name="CurrentWeatherInfo"
                component={CurrentWeatherInfoScreen}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
};

export { MainStackNavigator };
