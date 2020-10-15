import React, { useState } from "react";
import { Button, Text, View } from "react-native";

const App = () => {
    const [count, incCount] = useState(0);

    const updateCounter = () => {
        incCount(count + 1);
    };

    return (
        <View style={{ width: "100%", height: "100%", justifyContent: "center", alignItems: "center" }}>
            <Text>Hello world!</Text>
            <Text>{count}</Text>
            <Button title={"update"} onPress={updateCounter} />
        </View>
    );
};

export default App;
