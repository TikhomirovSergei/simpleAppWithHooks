import React, { useState } from "react";
import { Button, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { changeCounter } from "../../redux/actions/test";

const TestComponent = () => {
    const counter = useSelector((state: any) => state.test.counter);
    const dispatch = useDispatch();
    const [count, incCount] = useState(0);

    const updateCounter = () => {
        incCount(count + 1);
    };

    const updatePropsCounter = () => {
        dispatch(changeCounter());
    };

    return (
        <View style={{ width: "100%", height: "100%", justifyContent: "center", alignItems: "center" }}>
            <Text>Hello world!</Text>
            <Text>{count}</Text>
            <Button title={"update local counter"} onPress={updateCounter} />
            <Text>{counter}</Text>
            <Button title={"update redux counter"} onPress={updatePropsCounter} />
        </View>
    );
};

export default TestComponent;
