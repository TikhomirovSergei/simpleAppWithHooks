import "react-native-gesture-handler";
import { AppRegistry } from "react-native";
import App from "./src/App";
import { name as appName } from "./app.json";

var globalObject = typeof self === "undefined" ? global : self;
module.exports = globalObject.fetch.bind(globalObject);

AppRegistry.registerComponent(appName, () => App);
