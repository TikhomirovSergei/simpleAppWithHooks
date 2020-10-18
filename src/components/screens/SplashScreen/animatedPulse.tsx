import { useEffect, useRef } from "react";
import { Animated } from "react-native";

export const animatedPulse = (startDelay = 100) => {
    const scale = useRef(new Animated.Value(0.8)).current;

    const pulse = () => {
        Animated.sequence([
            Animated.timing(scale, { toValue: 1.2, duration: 1000 } as any),
            Animated.timing(scale, { toValue: 0.8, duration: 1000 } as any),
        ]).start(() => pulse());
    };

    useEffect(() => {
        const timeout = setTimeout(() => pulse(), startDelay);
        return () => clearTimeout(timeout);
    }, []);

    return scale;
};
