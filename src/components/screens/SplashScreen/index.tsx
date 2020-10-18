import { animatedPulse } from "./animatedPulse";

import React from "react";
import { View } from "react-native";

import { ImageBox } from "./ImageBox";

import { splashScreenStyles } from "../../../styles/splashScreenStyles";

const SplashScreen = () => {
    const scale = animatedPulse();

    return (
        <View style={splashScreenStyles.container}>
            <ImageBox scale={scale as any} />
        </View>
    );
};

export default SplashScreen;
