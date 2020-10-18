import React from "react";
import { Animated } from "react-native";

import { logo } from "../../../styles/sourcePath";
import { splashScreenStyles } from "../../../styles/splashScreenStyles";

export const ImageBox = ({ scale = 1 }) => (
    <Animated.Image
        source={logo}
        style={[
            splashScreenStyles.imageSize,
            {
                transform: [{ scale }],
            },
        ]}
    />
);
