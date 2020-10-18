import { NavigationContainer } from "@react-navigation/native";

import React, { useState, useEffect } from "react";
import "react-native-gesture-handler";

import { MainStackNavigator } from "./MainStackNavigator";
import SplashScreen from "./screens/SplashScreen";

const App = () => {
    const [isLoaded, setAppLoaded] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setAppLoaded(true);
        }, 3000);
    });

    return isLoaded ? (
        <NavigationContainer>
            <MainStackNavigator />
        </NavigationContainer>
    ) : (
        <SplashScreen />
    );
};

export default App;
