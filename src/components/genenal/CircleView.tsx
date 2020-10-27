import React from "react";
import { View } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

type CircleProps = {
    color: string;
};

const CircleView = (props: CircleProps) => (
    <View>
        <MaterialCommunityIcons
            name={"circle-outline"}
            size={6}
            style={{
                top: -5,
                color: props.color,
            }}
        />
    </View>
);

export default CircleView;
