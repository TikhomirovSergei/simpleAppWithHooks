import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";

import React from "react";
import "react-native-gesture-handler";

import MainScreen from "./screens/MainScreen";
import WeekWeatherInfoScreen from "./screens/WeekWeatherInfoScreen";

const Stack = createStackNavigator();

const MainStackNavigator = () => {
    return (
        <Stack.Navigator
            headerMode={"screen"}
            screenOptions={{
                ...TransitionPresets.SlideFromRightIOS,
                headerShown: false,
                gestureEnabled: true,
            }}>
            <Stack.Screen name="MainScreen" component={MainScreen} />
            <Stack.Screen name="WeekWeatherInfo" component={WeekWeatherInfoScreen} />
        </Stack.Navigator>
    );
};

export { MainStackNavigator };
