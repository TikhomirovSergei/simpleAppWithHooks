import { NavigationContainer } from "@react-navigation/native";

import React, { useEffect, useState } from "react";
import { StatusBar } from "react-native";
import "react-native-gesture-handler";

import { MainStackNavigator } from "./MainStackNavigator";
import SplashScreen from "./screens/SplashScreen";

import { backgroundColor } from "../styles/headerStyles";

const App = () => {
    const [isLoaded, setAppLoaded] = useState(false);

    useEffect(() => {
        setTimeout(() => setAppLoaded(true), 3000);
    }, []);

    return (
        <>
            <StatusBar backgroundColor={backgroundColor} barStyle="light-content" />
            {isLoaded ? (
                <NavigationContainer>
                    <MainStackNavigator />
                </NavigationContainer>
            ) : (
                <SplashScreen />
            )}
        </>
    );
};

export default App;
