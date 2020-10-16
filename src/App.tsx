import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { LogBox } from "react-native";
import "react-native-gesture-handler";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import TestComponent from "./components/TestComponent";
import { persistor, store } from "./redux/store";

LogBox.ignoreAllLogs();

const App = () => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <NavigationContainer>
                    <TestComponent />
                </NavigationContainer>
            </PersistGate>
        </Provider>
    );
};

export default App;
