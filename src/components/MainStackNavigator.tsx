import { createStackNavigator } from "@react-navigation/stack";

import React from "react";
import "react-native-gesture-handler";

import MainScreen from "./screens/MainScreen";
import WeekWeatherInfoScreen from "./screens/WeekWeatherInfoScreen";

const Stack = createStackNavigator();

const MainStackNavigator = () => {
    return (
        <Stack.Navigator headerMode={"screen"}>
            <Stack.Screen name="MainScreen" component={MainScreen} options={{ headerShown: false }} />
            <Stack.Screen name="WeekWeatherInfo" component={WeekWeatherInfoScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
};

export { MainStackNavigator };
