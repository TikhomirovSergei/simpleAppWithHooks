import React from "react";
import { LogBox } from "react-native";
import "react-native-gesture-handler";
import { Provider as PaperProvider } from "react-native-paper";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import App from "./components/App";

import { persistor, store } from "./redux/store";

LogBox.ignoreAllLogs();

const Root = () => {
    return (
        <Provider store={store}>
            <PaperProvider>
                <PersistGate loading={null} persistor={persistor}>
                    <App />
                </PersistGate>
            </PaperProvider>
        </Provider>
    );
};

export default Root;
