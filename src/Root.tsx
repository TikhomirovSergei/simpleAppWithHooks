import React from "react";
import { LogBox } from "react-native";
import "react-native-gesture-handler";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import App from "./components/App";

import { persistor, store } from "./redux/store";

LogBox.ignoreAllLogs();

const Root = () => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <App />
            </PersistGate>
        </Provider>
    );
};

export default Root;
